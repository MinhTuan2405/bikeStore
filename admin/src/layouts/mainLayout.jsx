import { Outlet } from "react-router"; // Corrected import from react-router-dom
import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";

export default function MainLayout() {
  const [sidebarWidth, setSidebarWidth] = useState("w-64"); // Default to expanded sidebar width

  // Listen for changes in localStorage or custom events to detect sidebar collapse state
  useEffect(() => {
    // Check if sidebar state is stored in localStorage
    const checkSidebarState = () => {
      const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
      setSidebarWidth(isCollapsed ? "w-32" : "w-64");
    };

    // Initial check
    checkSidebarState();

    // Listen for custom event that SideBar emits when toggled
    const handleSidebarToggle = (e) => {
      setSidebarWidth(e.detail.collapsed ? "w-32" : "w-64");
    };

    window.addEventListener("sidebarToggle", handleSidebarToggle);

    // Also check on window focus in case localStorage was changed in another tab
    window.addEventListener("focus", checkSidebarState);

    return () => {
      window.removeEventListener("sidebarToggle", handleSidebarToggle);
      window.removeEventListener("focus", checkSidebarState);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <main 
        className={`flex-1 p-4 transition-all duration-300 ${sidebarWidth === "w-32" ? "ml-32" : "ml-64"}`}
        style={{ minHeight: "100vh" }} // Ensure main content is at least full viewport height
      >
        <Outlet />
      </main>
    </div>
  );
}