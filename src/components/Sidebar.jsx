import { NavLink } from "react-router-dom";
import { HiHome, HiChartBar, HiCog } from "react-icons/hi";

import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <h2 className="sidebar-title">My Panel</h2>

      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "sidebar-link active-link" : "sidebar-link"
            }
            onClick={onClose}
          >
            <HiHome className="icon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? "sidebar-link active-link" : "sidebar-link"
            }
            onClick={onClose}
          >
            <HiChartBar className="icon" />
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "sidebar-link active-link" : "sidebar-link"
            }
            onClick={onClose}
          >
            <HiCog className="icon" />
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
