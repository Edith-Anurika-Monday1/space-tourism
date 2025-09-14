import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "00", name: "Home", path: "/" },
    { id: "01", name: "Destination", path: "/destination" },
    { id: "02", name: "Crew", path: "/crew" },
    { id: "03", name: "Technology", path: "/technology" },
  ];

  return (
    <header className="flex items-center justify-between p-6 lg:px-12 relative">
      <img src={logo} alt="Space Tourism Logo" className="w-12 h-12" />

      {/* Desktop Menu */}
      <nav className="hidden md:flex bg-white/5 backdrop-blur-lg px-12 py-6 space-x-8 uppercase tracking-widest">
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `hover:border-b-2 pb-2 ${
                isActive ? "border-white" : "border-transparent"
              }`
            }
          >
            <span className="mr-2 font-bold">{link.id}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? closeIcon : hamburger} alt="menu" className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-0 right-0 h-screen w-2/3 bg-white/10 backdrop-blur-lg p-6 flex flex-col gap-6 uppercase z-50">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `hover:border-b-2 pb-2 ${
                  isActive ? "border-white" : "border-transparent"
                }`
              }
            >
              <span className="mr-2 font-bold">{link.id}</span>
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
