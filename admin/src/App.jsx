// import './assets/App.css'

// function App() {

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


// AdminDashboard.jsx
import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

// MOCK DATA (dựa theo schema BikeStore)
const monthlyRevenue = [
  { month: 'Jan', total: 120000 },
  { month: 'Feb', total: 150000 },
  { month: 'Mar', total: 170000 },
  { month: 'Apr', total: 130000 },
  { month: 'May', total: 180000 },
];

const topProducts = [
  { name: 'Mountain Bike X100', sold: 340 },
  { name: 'Road Bike Pro', sold: 275 },
  { name: 'City Bike Classic', sold: 200 },
];

const stockStatus = [
  { name: 'In Stock', value: 540 },
  { name: 'Low Stock', value: 60 },
  { name: 'Out of Stock', value: 20 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">🚲 BikeStore Admin Dashboard</h1>

      {/* Doanh thu theo tháng */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">📈 Doanh thu theo tháng</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `${value.toLocaleString()} ₫`} />
            <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top sản phẩm bán chạy */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">🔥 Top sản phẩm bán chạy</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart layout="vertical" data={topProducts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="sold" fill="#82ca9d" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tình trạng tồn kho */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">📦 Tình trạng tồn kho</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={stockStatus}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {stockStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
