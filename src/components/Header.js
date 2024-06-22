import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom'; 
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4">
      <div className="flex items-center justify-center my-4">
        <img src="/assets/icon.webp" className="w-6/12 md:w-1/12" alt="logo" />
        <h1 className="mx-4 text-4xl">
          Example-Page<br />
          <span className="text-xl">Example Text</span>
        </h1>
      </div>
      <header className="py-5 px-6 flex justify-between items-center text-white rounded-xl mx-3 mt-3 bg-google-medium-grey" id="navbar">
        <div className="relative flex justify-end md:justify-between w-full md:!w-auto md:!relative">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <FaBars />
          </button>

          <nav className={`absolute right-0 mt-2 w-48 dropdown-background rounded-md shadow-lg py-1 z-50 p-3 overflow-hidden md:hidden text-google-medium-grey transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="space-y-1">
              <NavItem to="/" label="Home" />
              <NavItem to="/item1" label="Item 1" />

            </ul>
          </nav>
        </div>
      
        {/* Desktop Navigation */}
        <nav className="hidden md:flex w-full justify-center">
          <ul className="flex space-x-4 text-google-dark-grey bolded">
            <NavItem to="/" label="Home" />
            <NavItem to="/item1" label="Item 1" />

          </ul>
        </nav>
      </header>
    </div>
  );
};


// NavItem Component for DRY code
const NavItem = ({ to, label }) => (
  <li className={`navbar-text ${useLocation().pathname === to ? 'active' : ''}`}>
    <NavLink to={to}>{label}</NavLink> 
  </li>
);

export default Header;
