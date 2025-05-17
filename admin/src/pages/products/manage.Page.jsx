import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import * as Yup from 'yup';
import api from '../../services/api';

// --- API Configuration ---
// Replace with your actual API base URL
const API_BASE_URL = 'YOUR_BACKEND_API_URL';

// --- Component ---
export default function ManagePage() {
  // State to hold data fetched from API
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // State for loading and errors
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for editing product
  const [editingProduct, setEditingProduct] = useState(null);
  // State for current tab
  const [tab, setTab] = useState('products');

  // --- API Fetching Functions ---

  // Function to fetch all products
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get(`/product/action/products`);
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await api.get(`/categories`);
      setCategories(response.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      // You might want a separate error state for settings tab
    }
  };

  // Function to fetch all brands
  const fetchBrands = async () => {
    try {
      const response = await api.get(`/brands`);
      setBrands(response.data);
    } catch (err) {
      console.error("Error fetching brands:", err);
      // You might want a separate error state for settings tab
    }
  };

  // --- Initial Data Fetch on Component Mount ---
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchBrands();
  }, []); // Empty dependency array means this runs only once on mount

  // --- Formik and Product Operations (API Integrated) ---
  const formik = useFormik({
    initialValues: { product_name: '', brand_id: '', category_id: '', model_year: '', list_price: '' },
    // Use enableReinitialize to reset form when editingProduct changes
    enableReinitialize: true,
    validationSchema: Yup.object({
      product_name: Yup.string().required('Required'),
      brand_id: Yup.number().required('Required').positive('Must be a valid brand'),
      category_id: Yup.number().required('Required').positive('Must be a valid category'),
      model_year: Yup.number().required('Required').integer('Must be a year'),
      list_price: Yup.number().required('Required').positive('Must be a positive number'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setError(null); // Clear previous errors
      try {
        if (editingProduct) {
          // Update existing product
          await api.put(`/product/action/products/${editingProduct.product_id}`, values);
          setEditingProduct(null); // Exit editing mode
        } else {
          // Add new product
          await api.post(`/product/action/products`, values);
        }
        resetForm();
        // Refetch products to update the list after add/edit
        fetchProducts();
      } catch (err) {
        console.error("Error saving product:", err);
        setError(`Failed to save product: ${err.message || 'Unknown error'}`);
      }
    },
  });

  // Effect to load product data into form when editingProduct changes
  useEffect(() => {
    if (editingProduct) {
      formik.setValues({
        product_name: editingProduct.product_name,
        brand_id: editingProduct.brand_id, // Use the correct types/values from your product data
        category_id: editingProduct.category_id,
        model_year: editingProduct.model_year,
        list_price: editingProduct.list_price,
      });
    } else {
      formik.resetForm();
    }
    // Include formik dependency to avoid lint warnings, although typically you
    // wouldn't resetForm when editingProduct becomes null inside this effect,
    // it's handled in onSubmit. Let's remove resetForm here and rely on onSubmit.
    // formik.resetForm is called in onSubmit anyway.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingProduct]); // Depend on editingProduct

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setError(null); // Clear previous errors
      try {
        await api.delete(`/product/action/products/${id}`);
        // Refetch products after deletion
        fetchProducts();
      } catch (err) {
        console.error("Error deleting product:", err);
        setError(`Failed to delete product: ${err.message || 'Unknown error'}`);
      }
    }
  };

  // --- Category and Brand Operations (API Integrated) ---

  const handleAddCategory = async (name) => {
    setError(null); // Clear previous errors
    try {
      await api.post(`/categories`, { category_name: name });
      // Refetch categories after adding
      fetchCategories();
    } catch (err) {
      console.error("Error adding category:", err);
      setError(`Failed to add category: ${err.message || 'Unknown error'}`);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (products.some(p => p.category_id === id)) {
      alert('Cannot delete category with associated products.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this category?')) {
      setError(null); // Clear previous errors
      try {
        await api.delete(`/categories/${id}`);
        // Refetch categories after deletion
        fetchCategories();
      } catch (err) {
        console.error("Error deleting category:", err);
        setError(`Failed to delete category: ${err.message || 'Unknown error'}`);
      }
    }
  };

  const handleAddBrand = async (name) => {
    setError(null); // Clear previous errors
    try {
      await api.post(`/brands`, { brand_name: name });
      // Refetch brands after adding
      fetchBrands();
    } catch (err) {
      console.error("Error adding brand:", err);
      setError(`Failed to add brand: ${err.message || 'Unknown error'}`);
    }
  };

  const handleDeleteBrand = async (id) => {
     if (products.some(p => p.brand_id === id)) {
      alert('Cannot delete brand with associated products.');
      return;
    }
    if (window.confirm('Are you sure you want to delete this brand?')) {
      setError(null); // Clear previous errors
      try {
        await api.delete(`/brands/${id}`);
        // Refetch brands after deletion
        fetchBrands();
      } catch (err) {
        console.error("Error deleting brand:", err);
        setError(`Failed to delete brand: ${err.message || 'Unknown error'}`);
      }
    }
  };


  // --- Chart Data Calculation ---
  const chartData = Object.values(
    products.reduce((acc, p) => {
      const year = p.model_year;
      if (year) { // Ensure model_year exists
         acc[year] = acc[year] || { year: year, count: 0 };
         acc[year].count += 1;
      }
      return acc;
    }, {})
  ).sort((a, b) => a.year - b.year); // Sort by year

  // --- Render ---
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`p-2 rounded ${tab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('products')}
        >
          Products
        </button>
        <button
          className={`p-2 rounded ${tab === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTab('settings')}
        >
          Categories & Brands
        </button>
      </div>

      {/* Products Tab Content */}
      {tab === 'products' && (
        <>
          {/* Product Form */}
          <h2 className="text-xl font-semibold mb-2">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
                <input
                    className={`border p-2 rounded w-full ${formik.touched.product_name && formik.errors.product_name ? 'border-red-500' : ''}`}
                    name="product_name"
                    placeholder="Product Name"
                    value={formik.values.product_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.product_name && formik.errors.product_name ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.product_name}</div>
                ) : null}
            </div>

            <div>
                <select
                    className={`border p-2 rounded w-full ${formik.touched.brand_id && formik.errors.brand_id ? 'border-red-500' : ''}`}
                    name="brand_id"
                    value={formik.values.brand_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                  <option value="">Select Brand</option>
                  {brands.map((b) => (<option key={b.brand_id} value={b.brand_id}>{b.brand_name}</option>))}
                </select>
                 {formik.touched.brand_id && formik.errors.brand_id ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.brand_id}</div>
                ) : null}
            </div>

            <div>
                 <select
                    className={`border p-2 rounded w-full ${formik.touched.category_id && formik.errors.category_id ? 'border-red-500' : ''}`}
                    name="category_id"
                    value={formik.values.category_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                  <option value="">Select Category</option>
                  {categories.map((c) => (<option key={c.category_id} value={c.category_id}>{c.category_name}</option>))}
                </select>
                {formik.touched.category_id && formik.errors.category_id ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.category_id}</div>
                ) : null}
            </div>

            <div>
                 <input
                    className={`border p-2 rounded w-full ${formik.touched.model_year && formik.errors.model_year ? 'border-red-500' : ''}`}
                    name="model_year"
                    type="number"
                    placeholder="Model Year"
                    value={formik.values.model_year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                 {formik.touched.model_year && formik.errors.model_year ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.model_year}</div>
                ) : null}
            </div>

            <div>
                 <input
                    className={`border p-2 rounded w-full ${formik.touched.list_price && formik.errors.list_price ? 'border-red-500' : ''}`}
                    name="list_price"
                    type="number"
                    step="0.01" // Allow decimal input
                    placeholder="List Price"
                    value={formik.values.list_price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                 {formik.touched.list_price && formik.errors.list_price ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.list_price}</div>
                ) : null}
            </div>

            <button type="submit" className="col-span-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Saving...' : (editingProduct ? 'Update Product' : 'Add Product')}
            </button>
             {editingProduct && (
                 <button
                     type="button"
                     onClick={() => { setEditingProduct(null); formik.resetForm(); }}
                     className="col-span-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
                 >
                     Cancel Edit
                 </button>
             )}
          </form>

          {/* Loading Indicator */}
          {isLoading && <p>Loading products...</p>}

          {/* Product List Table */}
          {!isLoading && products.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-2">Product List</h2>
              <div className="overflow-x-auto"> {/* Added for mobile scrolling */}
                <table className="w-full border mb-8 table-auto"> {/* Use table-auto */}
                  <thead><tr className="bg-gray-100">
                    <th className="border p-2 text-left">ID</th>
                    <th className="border p-2 text-left">Name</th>
                    <th className="border p-2 text-left">Brand</th>
                    <th className="border p-2 text-left">Category</th>
                    <th className="border p-2 text-left">Year</th>
                    <th className="border p-2 text-left">Price</th>
                    <th className="border p-2 text-left">Actions</th>
                  </tr></thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.product_id}>
                        <td className="border p-2">{p.product_id}</td>
                        <td className="border p-2">{p.product_name}</td>
                        <td className="border p-2">{brands.find((b) => b.brand_id === parseInt(p.brand_id))?.brand_name || 'N/A'}</td>
                        <td className="border p-2">{categories.find((c) => c.category_id === parseInt(p.category_id))?.category_name || 'N/A'}</td>
                        <td className="border p-2">{p.model_year}</td>
                        <td className="border p-2">${p.list_price ? parseFloat(p.list_price).toFixed(2) : '0.00'}</td>
                        <td className="border p-2 space-x-2">
                          <button onClick={() => setEditingProduct(p)} className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">Edit</button>
                          <button onClick={() => handleDeleteProduct(p.product_id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
           {!isLoading && products.length === 0 && <p>No products found.</p>}


          {/* Products by Year Chart */}
          {chartData.length > 0 && (
             <>
              <h2 className="text-xl font-semibold mb-2">Products by Year</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* Ensure dataKey matches your data structure ('year' is correct) */}
                  <XAxis dataKey="year" type="category"/>
                  {/* Ensure YAxis is appropriate for count */}
                  <YAxis allowDecimals={false} dataKey="count" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
             </>
          )}
           {chartData.length === 0 && !isLoading && <p>No product data available for chart.</p>}

        </>
      )}

      {/* Settings Tab Content */}
      {tab === 'settings' && (
        <>
          {/* Categories Section */}
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="flex items-center space-x-2 mb-6">
            <input type="text" id="categoryName" className="border p-2 rounded flex-1" placeholder="New Category Name" />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={() => {
              const inputElement = document.getElementById('categoryName');
              const name = inputElement.value.trim();
              if (name) {
                handleAddCategory(name);
                inputElement.value = '';
              }
            }}>Add</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {categories.map((cat) => {
              const productCount = products.filter(p => parseInt(p.category_id) === cat.category_id).length;
              return (
                <div key={cat.category_id} className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition flex justify-between items-center">
                  <div>
                     <h3 className="text-lg font-semibold text-gray-800">{cat.category_name}</h3>
                     <p className="text-sm text-gray-600">{productCount} product{productCount !== 1 ? 's' : ''}</p>
                  </div>
                  {/* Disable delete if products are linked */}
                  <button
                    onClick={() => handleDeleteCategory(cat.category_id)}
                    className={`text-sm ${productCount > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-red-600 hover:underline'}`}
                    disabled={productCount > 0}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
             {categories.length === 0 && !isLoading && <p>No categories found.</p>}
          </div>

          {/* Brands Section */}
          <h2 className="text-xl font-semibold mb-4">Brands</h2>
          <div className="flex items-center space-x-2 mb-6">
            <input type="text" id="brandName" className="border p-2 rounded flex-1" placeholder="New Brand Name" />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={() => {
              const inputElement = document.getElementById('brandName');
              const name = inputElement.value.trim();
              if (name) {
                 handleAddBrand(name);
                 inputElement.value = '';
              }
            }}>Add</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {brands.map((b) => {
              const productCount = products.filter(p => parseInt(p.brand_id) === b.brand_id).length;
              return (
                <div key={b.brand_id} className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition flex justify-between items-center">
                   <div>
                    <h3 className="text-lg font-semibold text-gray-800">{b.brand_name}</h3>
                    <p className="text-sm text-gray-600">{productCount} product{productCount !== 1 ? 's' : ''}</p>
                   </div>
                   {/* Disable delete if products are linked */}
                  <button
                    onClick={() => handleDeleteBrand(b.brand_id)}
                    className={`text-sm ${productCount > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-red-600 hover:underline'}`}
                    disabled={productCount > 0}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
             {brands.length === 0 && !isLoading && <p>No brands found.</p>}
          </div>
        </>
      )}
    </div>
  );
}