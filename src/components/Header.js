import { useState, useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import pageData from "../constants/page.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = useMemo(() => pageData.header.navItems, []);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between mb-4 rounded-b-xl mx-4 relative">
      <div className="flex items-center flex-grow">
        <img
          src="/assets/icon.webp"
          className="w-10 h-10 md:w-12 md:h-12 mr-4"
          alt="logo"
        />
        <h1 className="text-xl md:text-2xl text-white">{pageData.pageName}</h1>
      </div>

      <button
        id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-3 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        <FaBars className="text-xl" />
      </button>

      <nav
        id="mobile-menu"
        className={`absolute top-full right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-50 p-3 overflow-hidden md:hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 rounded-2xl">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              currentPath={location.pathname}
            />
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex items-center space-x-4 list-none">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            currentPath={location.pathname}
          />
        ))}
      </div>
    </header>
  );
};

const NavItem = ({ to, label, currentPath }) => (
  <li
    className={`navbar-text ${
      currentPath === to ? "text-white" : "text-gray-400"
    }`}
  >
    <NavLink to={to}>{label}</NavLink>
  </li>
);

export default Header;