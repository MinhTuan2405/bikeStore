import React, { useEffect, useState, useCallback } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import {
  Card, CardContent, TextField, Button, CircularProgress, Alert,
  FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput // MUI components for Multi-Select
} from '@mui/material';
import axios from 'axios';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1', '#ec4899', '#8b5cf6'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white shadow-lg rounded-md border border-gray-200">
        <p className="label text-sm font-semibold text-gray-700">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }} className="text-xs">
            {`${entry.name}: ${typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent * 100 < 5) return null;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-medium">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ProductsPage = () => {
  const [data, setData] = useState({
    topProducts: [],
    brandRevenue: [],
    categoryRevenue: [],
    inventory: [], // This will hold the full inventory list
    salePerYear: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topN, setTopN] = useState(5);
  const [topNInput, setTopNInput] = useState("5");

  // State for inventory multi-select
  const [selectedInventoryProducts, setSelectedInventoryProducts] = useState([]);

  const fetchData = useCallback(async (currentTopN) => {
    setLoading(true);
    setError(null);
    try {
      const [topRes, brandRes, categoryRes, inventoryRes, saleYearRes] = await Promise.all([
        axios.get(`/api/product/stats/top/${currentTopN}`),
        axios.get('/api/product/stats/revenue'),
        axios.get('/api/product/stats/categoryrevenue'),
        axios.get('/api/product/stats/inventory'),
        axios.get('/api/product/stats/saleperyear')
      ]);

      setData({
        topProducts: topRes.data.data || [],
        brandRevenue: brandRes.data.data || [],
        categoryRevenue: categoryRes.data.data || [],
        inventory: inventoryRes.data.data || [],
        salePerYear: saleYearRes.data.data || [],
      });
      // Reset selected inventory products if the inventory data changes, or pre-select some if needed
      // setSelectedInventoryProducts([]);
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError(err.response?.data?.message || err.message || 'Không thể tải dữ liệu thống kê.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(topN);
  }, [fetchData, topN]);

  const handleTopNChange = (event) => {
    setTopNInput(event.target.value);
  };

  const applyTopN = () => {
    const num = parseInt(topNInput, 10);
    if (!isNaN(num) && num > 0) {
      setTopN(num);
    } else {
      setTopNInput(String(topN));
    }
  };

  const handleInventoryProductChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedInventoryProducts(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Filter inventory data for the chart based on selection
  const displayedInventoryData = data.inventory.filter(item =>
    selectedInventoryProducts.includes(item.product_name)
  );

  if (error) {
    return (
      <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Alert severity="error" className="w-full max-w-md">
          <p className="font-semibold">Đã xảy ra lỗi!</p>
          {error}
        </Alert>
        <Button variant="contained" onClick={() => fetchData(topN)} className="mt-4">
          Thử lại
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-slate-100 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">Thống kê sản phẩm</h1>
      </header>

      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
          <CircularProgress size={60} />
          <p className="ml-4 text-lg text-slate-700">Đang tải dữ liệu...</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products */}
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Top {topN} Sản phẩm Bán Chạy Nhất</h2>
            <div className="flex items-center space-x-2 mb-4">
              <TextField
                label="Số lượng Top"
                type="number"
                size="small"
                value={topNInput}
                onChange={handleTopNChange}
                onKeyPress={(e) => e.key === 'Enter' && applyTopN()}
                inputProps={{ min: 1, step: 1 }}
                className="w-28"
              />
              <Button variant="contained" size="medium" onClick={applyTopN} style={{ backgroundColor: COLORS[0] }}>
                Áp dụng
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              {data.topProducts.length > 0 ? (
                <BarChart data={data.topProducts} margin={{ top: 5, right: 20, left: 50, bottom: 70 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="product_name"
                    angle={-40}
                    textAnchor="end"
                    interval={0}
                    tick={{ fontSize: 10, fill: '#4b5563' }}
                    height={80}
                  />
                  <YAxis yAxisId="left" orientation="left" stroke={COLORS[0]} tick={{ fontSize: 10, fill: '#4b5563' }} label={{ value: 'Số lượng', angle: -90, position: 'insideLeft', fill: COLORS[0], fontSize: 12, dy: -10 }}/>
                  <YAxis yAxisId="right" orientation="right" stroke={COLORS[1]} tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fontSize: 10, fill: '#4b5563' }} label={{ value: 'Doanh thu', angle: -90, position: 'insideRight', fill: COLORS[1], fontSize: 12, dx: 10 }}/>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.2)' }}/>
                  <Legend verticalAlign="top" wrapperStyle={{paddingBottom: '10px'}} iconSize={12} />
                  <Bar yAxisId="left" dataKey="total_quantity_sold" fill={COLORS[0]} name="Số lượng bán" radius={[4, 4, 0, 0]}/>
                  <Bar yAxisId="right" dataKey="total_revenue" fill={COLORS[1]} name="Doanh thu" radius={[4, 4, 0, 0]}/>
                </BarChart>
              ) : (
                 <div className="flex items-center justify-center h-full text-slate-500">Không có dữ liệu.</div>
              )}
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue by Brand */}
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Doanh thu theo Thương hiệu</h2>
            <ResponsiveContainer width="100%" height={350}>
              {data.brandRevenue.length > 0 ? (
              <PieChart>
                <Pie
                  dataKey="total_revenue"
                  data={data.brandRevenue}
                  nameKey="brand_name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {data.brandRevenue.map((entry, index) => (
                    <Cell key={`cell-brand-${index}`} fill={COLORS[index % COLORS.length]} className="focus:outline-none" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend align="center" verticalAlign="bottom" wrapperStyle={{fontSize: '12px'}} iconType="circle" iconSize={10} />
              </PieChart>
              ) : (
                 <div className="flex items-center justify-center h-full text-slate-500">Không có dữ liệu.</div>
              )}
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue by Category */}
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Doanh thu theo Loại sản phẩm</h2>
            <ResponsiveContainer width="100%" height={350}>
             {data.categoryRevenue.length > 0 ? (
              <BarChart data={data.categoryRevenue} margin={{ top: 5, right: 20, left: 50, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="category_name"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  tick={{ fontSize: 10, fill: '#4b5563' }}
                  height={70}
                />
                <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} tick={{ fontSize: 10, fill: '#4b5563' }} label={{ value: 'Doanh thu', angle: -90, position: 'insideLeft', fill: '#4b5563', fontSize: 12 }}/>
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.2)' }}/>
                <Bar dataKey="total_revenue" name="Doanh thu" fill={COLORS[2]} radius={[4, 4, 0, 0]} />
              </BarChart>
              ) : (
                 <div className="flex items-center justify-center h-full text-slate-500">Không có dữ liệu.</div>
              )}
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Current Inventory - Changed to Multi-Select with Vertical Bar Chart */}
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Lượng tồn kho theo Sản phẩm</h2>
            <FormControl fullWidth margin="normal">
              <InputLabel id="inventory-multiple-product-label">Chọn sản phẩm</InputLabel>
              <Select
                labelId="inventory-multiple-product-label"
                id="inventory-multiple-product-select"
                multiple
                value={selectedInventoryProducts}
                onChange={handleInventoryProductChange}
                input={<OutlinedInput label="Chọn sản phẩm" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {data.inventory.map((item) => (
                  <MenuItem key={item.product_name} value={item.product_name}>
                    <Checkbox checked={selectedInventoryProducts.indexOf(item.product_name) > -1} />
                    <ListItemText primary={item.product_name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <ResponsiveContainer width="100%" height={300}> {/* Adjusted height for select */}
              {displayedInventoryData.length > 0 ? (
                <BarChart
                  data={displayedInventoryData} // Use filtered data
                  margin={{ top: 20, right: 20, left: 20, bottom: 60 }} // Adjusted margins
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="product_name"
                    angle={-30} // Angle for vertical chart
                    textAnchor="end"
                    interval={0}
                    tick={{ fontSize: 10, fill: '#4b5563' }}
                    height={70} // Adjust height for angled labels
                  />
                  <YAxis tick={{ fontSize: 10, fill: '#4b5563' }} label={{ value: 'Số lượng tồn', angle: -90, position: 'insideLeft', fill: '#4b5563', fontSize: 12 }}/>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.2)' }}/>
                  {/* <Legend verticalAlign="top" wrapperStyle={{paddingBottom: '10px'}} iconSize={12} /> No legend needed if only one bar type */}
                  <Bar dataKey="stock_quantity" name="Số lượng tồn" fill={COLORS[3]} radius={[4, 4, 0, 0]} />
                </BarChart>
              ) : (
                 <div className="flex items-center justify-center h-full text-slate-500 pt-8">
                  {selectedInventoryProducts.length > 0 ? "Không có dữ liệu tồn kho cho sản phẩm đã chọn." : "Vui lòng chọn sản phẩm để xem tồn kho."}
                 </div>
              )}
            </ResponsiveContainer>
          </CardContent>
        </Card>


        {/* Sales per Model Year - Bar Chart */}
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Số lượng bán theo Năm sản xuất</h2>
            <ResponsiveContainer width="100%" height={350}>
             {data.salePerYear.length > 0 ? (
              <BarChart data={data.salePerYear} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
                <XAxis dataKey="model_year" tick={{ fontSize: 11, fill: '#4b5563' }} />
                <YAxis tick={{ fontSize: 11, fill: '#4b5563' }} label={{ value: 'Số lượng bán', angle: -90, position: 'insideLeft', fill: '#4b5563', fontSize: 12 }}/>
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(200,200,200,0.2)' }}/>
                <Legend verticalAlign="top" wrapperStyle={{paddingBottom: '10px'}} iconSize={12} />
                <Bar dataKey="total_quantity_sold" name="Số lượng bán" fill={COLORS[4]} radius={[4, 4, 0, 0]} />
              </BarChart>
               ) : (
                 <div className="flex items-center justify-center h-full text-slate-500">Không có dữ liệu.</div>
              )}
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
        <footer className="text-center mt-12 py-6 text-slate-600">
            <p>&copy; {new Date().getFullYear()} Product Statistics. Powered by Recharts & MUI.</p>
        </footer>
    </div>
  );
};

export default ProductsPage;