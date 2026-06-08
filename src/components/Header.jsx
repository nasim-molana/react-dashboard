import { useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "../styles/Header.css";

const Header = ({ onMenuToggle }) => {
  const location = useLocation();

  const titles = {
    "/": "Robot Fleet Dashboard",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  const title = titles[location.pathname] || "Dashboard";

  const handleClick = () => {
    console.log("Refresh button clicked");
  };

  return (
    <header className="header">
      <div className="header-left">
        <button
          type="button"
          className="header-menu-button"
          onClick={onMenuToggle}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>
        <h1 className="header-title">{title}</h1>
      </div>
      <button className="header-button" onClick={handleClick}>
        Refresh
      </button>
    </header>
  );
};

export default Header;
