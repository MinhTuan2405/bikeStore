import { useState, useRef, useEffect } from "react";
import {
  ChevronFirst,
  ChevronLast,
  Home,
  Boxes,
  Settings,
  LogOut,
  ChevronDown,
  User,
  ChevronRight,
  Briefcase,
  Store 
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { handleLogout } from "../middlewares/logout";
import { Link, useNavigate } from "react-router";

export default function SideBar() {
  console.log ('sidebar render')
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  
  // Function to toggle sidebar collapse state
  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    
    // Store state in localStorage for persistence across page loads
    localStorage.setItem("sidebarCollapsed", newState);
    
    // Emit custom event for MainLayout to detect the change
    window.dispatchEvent(
      new CustomEvent("sidebarToggle", { 
        detail: { collapsed: newState } 
      })
    );
  };

  // Initialize from localStorage if available
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed") === "true";
    if (savedState !== collapsed) {
      setCollapsed(savedState);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogoutMessage = () => {
    setTimeout(() => {
      handleLogout();
      navigate('/login');
    }, 200);
    toast.success('log out successfully');
  };

  return (
    <>
      <Toaster position="top-right" />
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-md flex flex-col justify-between transition-all duration-300 z-40 ${
          collapsed ? "w-32" : "w-64"
        }`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-4 border-b">
            {!collapsed && (
              <img src="/logo.jpg" alt="logo" className="w-28 object-contain" />
            )}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              {collapsed ? <ChevronLast size={20} /> : <ChevronFirst size={20} />}
            </button>
          </div>

          {/* Nav Items */}
          <div className="h-[calc(100vh-14rem)] overflow-y-auto overflow-x-hidden">
            <ul className="flex flex-col gap-1 p-4 text-sm text-gray-700">

              <NavItem icon={<Home size={18} />} label="Tổng quan" to="/" collapsed={collapsed} />
              <DropdownNavItem
                icon={<Boxes size={18} />}
                label="Sản phẩm"
                collapsed={collapsed}
                subItems={[
                  { label: "Overview", to: "/product/overview" },
                  { label: "Manage Product", to: "/product/manage" },
                ]}
              />

              <DropdownNavItem
                icon={<User size={18} />}
                label="Nhân viên"
                collapsed={collapsed}
                subItems={[
                  { label: "Chỉ số nhân viên", to: "/staff/metric" },
                  { label: "Quản lý nhân viên", to: "/staff/manage" },
                ]}
              />

              <NavItem icon={<Briefcase size={18} />} label="Chỉ số kinh doanh" to="/sales/metrics" collapsed={collapsed} />

              <DropdownNavItem
                icon={<Store size={18} />}
                label="Show Room"
                collapsed={collapsed}
                subItems={[
                  { label: "Chỉ số tổng quan", to: "/showroom/metric" },
                  { label: "Quản lý cửa hàng", to: "/showroom/manage" },
                ]}
              />  
              {/* <NavItem icon={<Settings size={18} />} label="Cài đặt" to="/settings" collapsed={collapsed} /> */}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex items-center gap-3">
          <img src="/adminImg.jpg" alt="Admin" className="w-10 h-10 rounded-full object-cover" />
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-semibold">BikeStore Admin</p>
              <p className="text-xs text-gray-500">admin@gm.uit.edu.vn</p>
            </div>
          )}
          <LogOut size={18} className="text-gray-500 hover:text-red-500 cursor-pointer" onClick={handleLogoutMessage} />
        </div>
      </aside>
    </>
  );
}

// NavItem with link
function NavItem({ icon, label, to, collapsed }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
      >
        {icon}
        {!collapsed && <span>{label}</span>}
      </Link>
    </li>
  );
}

function DropdownNavItem({ icon, label, collapsed, subItems }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    if (collapsed) {
      clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (collapsed) {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 20); 
    }
  };

  // Calculate dropdown position
  useEffect(() => {
    if (open && collapsed && dropdownRef.current && menuRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const menuEl = menuRef.current;
      
      // Position the menu next to the dropdown item
      menuEl.style.position = 'fixed';
      menuEl.style.top = `${dropdownRect.top}px`;
      menuEl.style.left = `${dropdownRect.right + 5}px`; // 5px offset from sidebar
      
      // Check if menu would go below viewport and adjust if needed
      const menuRect = menuEl.getBoundingClientRect();
      if (menuRect.bottom > window.innerHeight) {
        const overflowY = menuRect.bottom - window.innerHeight;
        menuEl.style.top = `${dropdownRect.top - overflowY - 10}px`; // 10px buffer
      }
    }
  }, [open, collapsed]);

  return (
    <li
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => {
          if (!collapsed) setOpen(!open);
        }}
        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          {icon}
          {!collapsed && <span>{label}</span>}
        </div>
        {!collapsed ? (
          <ChevronDown
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            size={16}
          />
        ) : (
          <ChevronRight className="ml-auto text-gray-400" size={16} />
        )}
      </button>

      {open && (
        <ul
          ref={menuRef}
          className={`${
            collapsed
              ? "bg-white shadow-lg border rounded-lg p-2 z-50"
              : "ml-8 mt-1"
          } flex flex-col gap-1 text-sm text-gray-600`}
          style={
            !collapsed ? {} : { minWidth: "180px" }
          }
        >
          {subItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              <ChevronRight size={14} className="text-gray-400" />
              {item.label}
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
}