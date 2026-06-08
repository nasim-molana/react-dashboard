import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="layout">
      {sidebarOpen && (
        <button
          type="button"
          className="layout-overlay"
          aria-label="Close menu"
          onClick={closeSidebar}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className="layout-main">
        <Header onMenuToggle={toggleSidebar} />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
