import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import api from '../../services/api'; // Giả sử đường dẫn này đúng
import { useEffect, useState } from 'react';
import { 
  LineChart as LineChartIcon, // Đổi tên để tránh xung đột với component Recharts
  BarChart3, 
  PieChart as StockPieChartIcon, // Đổi tên để tránh xung đột
  TrendingUp, 
  Package, 
  ShoppingCart,
  Repeat // Biểu tượng cho vòng quay vốn
} from 'lucide-react';

// Dữ liệu mẫu cho tình trạng tồn kho
const stockStatusData = [
  { name: 'Còn hàng', value: 540, color: '#00C49F' },
  { name: 'Sắp hết', value: 60, color: '#FFBB28' },
  { name: 'Hết hàng', value: 20, color: '#FF8042' },
];

export default function DashBoardPage() {
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [topTurnoverProducts, setTopTurnoverProducts] = useState([]); // State mới

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const [revenueRes, topProductsRes, turnoverRes] = await Promise.all([
          api.get('/sale/stats/revenuepermonth'),
          api.get('/product/stats/top/3'),
          api.get('/sale/stats/turnover'), 
        ]);
  
        setMonthlyRevenue(revenueRes.data.data);
  
        const topSellingData = topProductsRes.data.data.map(el => ({
          name: el.product_name,
          sold: el.total_quantity_sold,
        }));
        setTopProducts(topSellingData);

        // Xử lý dữ liệu vòng quay vốn
        const rawTurnoverData = turnoverRes.data.data;
        const processedTurnoverData = rawTurnoverData
          .map(item => ({
            ...item,
            total_sold: parseInt(item.total_sold, 10),
            total_stock: parseInt(item.total_stock, 10),
            turnover_rate: parseFloat(item.turnover_rate) // Đảm bảo là số
          }))
          .sort((a, b) => b.turnover_rate - a.turnover_rate) // Sắp xếp giảm dần
          .slice(0, 7); // Lấy top 7
        setTopTurnoverProducts(processedTurnoverData);

      } catch (error) {
        console.error('Lỗi khi tải dữ liệu dashboard:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const formatCurrency = (value) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  const formatYAxisCurrency = (value) => `${(value / 1000000).toFixed(0)}tr`;
  const formatPercent = (value) => `${(value * 100).toFixed(1)}%`;

  // Custom Tooltip Component
  const CustomTooltipContent = ({ active, payload, label, type }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; // Dữ liệu của điểm/cột được hover
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 text-sm">
          <p className="label text-gray-700 font-semibold mb-1">{label || data.product_name || data.month}</p>
          {type === 'revenue' && (
            <p style={{ color: payload[0].color || payload[0].stroke }}>
              {payload[0].name}: {formatCurrency(payload[0].value)}
            </p>
          )}
          {type === 'topSelling' && (
            <p style={{ color: payload[0].fill }}>
              {payload[0].name}: {payload[0].value} chiếc
            </p>
          )}
          {type === 'stockStatus' && (
             <p style={{ color: payload[0].payload.fill }}>
              {data.name}: {data.value} sản phẩm ({(data.percent * 100).toFixed(0)}%)
            </p>
          )}
          {type === 'turnover' && (
            <>
              <p style={{ color: payload[0].fill }} className="mb-0.5">
                Tỷ lệ vòng quay: {formatPercent(data.turnover_rate)}
              </p>
              <p className="text-gray-600 text-xs mb-0.5">Đã bán: {data.total_sold} chiếc</p>
              <p className="text-gray-600 text-xs">Tồn kho: {data.total_stock} chiếc</p>
            </>
          )}
        </div>
      );
    }
    return null;
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 p-4 sm:p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center">
          <ShoppingCart className="w-10 h-10 mr-3 text-indigo-600" />
          Hệ thống cửa hàng xe đạp Ế
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doanh thu theo tháng */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 flex items-center">
            <TrendingUp className="w-7 h-7 mr-2 text-pink-500" />
            Doanh thu theo tháng
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyRevenue} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#4A5568' }} />
              <YAxis tickFormatter={formatYAxisCurrency} tick={{ fontSize: 12, fill: '#4A5568' }} />
              <Tooltip content={<CustomTooltipContent type="revenue" />} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Line 
                type="monotone" dataKey="total" name="Tổng doanh thu"
                stroke="#ec4899" strokeWidth={2.5} 
                dot={{ r: 5, strokeWidth: 2, fill: '#fff', stroke: '#ec4899' }} 
                activeDot={{ r: 7, stroke: '#ec4899', fill: '#ec4899', strokeWidth: 2 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top sản phẩm bán chạy */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 flex items-center">
            <BarChart3 className="w-7 h-7 mr-2 text-teal-500" />
            Top sản phẩm bán chạy
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart layout="vertical" data={topProducts} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis type="number" tick={{ fontSize: 12, fill: '#4A5568' }} />
              <YAxis type="category" dataKey="name" width={130} tick={{ fontSize: 12, fill: '#4A5568', width:120 }} style={{textAnchor: 'end'}}/>
              <Tooltip content={<CustomTooltipContent type="topSelling" />} cursor={{ fill: 'rgba(200, 200, 200, 0.2)' }}/>
              <Bar dataKey="sold" name="Đã bán" fill="#2dd4bf" barSize={25} radius={[0, 8, 8, 0]} /> 
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tình trạng tồn kho */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 flex items-center">
            <Package className="w-7 h-7 mr-2 text-amber-500" />
            Tình trạng tồn kho
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={stockStatusData} cx="50%" cy="45%"
                labelLine={false} outerRadius={100} innerRadius={60}
                fill="#8884d8" dataKey="value"
                label={({ name, percent, value }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
              >
                {stockStatusData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltipContent type="stockStatus" />} />
              <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '20px', fontSize: '14px' }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Sản phẩm có tỷ lệ vòng quay vốn cao nhất */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 flex items-center">
            <Repeat className="w-7 h-7 mr-2 text-sky-500" />
            Top 7 Sản phẩm có tỉ lệ xoay vòng kho cao
          </h2>
          <ResponsiveContainer width="100%" height={400}> 
            <BarChart layout="vertical" data={topTurnoverProducts} margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                type="number" 
                dataKey="turnover_rate"
                tickFormatter={formatPercent} // Định dạng trục X là %
                domain={[0, 'dataMax + 0.1']} // Đảm bảo có không gian cho giá trị cao nhất
                tick={{ fontSize: 12, fill: '#4A5568' }} 
              />
              <YAxis 
                type="category" 
                dataKey="product_name" 
                width={200} // Tăng chiều rộng cho tên sản phẩm dài
                tick={{ fontSize: 12, fill: '#4A5568', width:190 }} 
                style={{textAnchor: 'end'}}
              />
              <Tooltip content={<CustomTooltipContent type="turnover"/>} cursor={{ fill: 'rgba(200, 200, 200, 0.2)' }}/>
              <Bar dataKey="turnover_rate" name="Tỷ lệ xoay vòng kho" fill="#38bdf8" barSize={20} radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}