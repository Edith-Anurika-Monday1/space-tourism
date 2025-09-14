import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { number: "00", label: "Home", path: "/" },
    { number: "01", label: "Destination", path: "/destinations" },
    { number: "02", label: "Crew", path: "/crew" },
    { number: "03", label: "Technology", path: "/technology" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-12 lg:pt-10 relative">
      {/* Logo */}
      <img
        src={logo}
        alt="Space Tourism Logo"
        className="w-10 h-10 lg:w-12 lg:h-12"
      />

      {/* Divider Line (desktop only) */}
      <div className="hidden lg:block absolute left-32 top-1/2 w-[30%] border-t border-white/25 -translate-y-1/2 z-10"></div>

      {/* Desktop Nav */}
      <nav className="hidden lg:block backdrop-blur-xl bg-white/5">
        <ul className="flex gap-12 px-20 py-6 uppercase tracking-widest text-white">
          {links.map((link) => (
            <li key={link.number}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex gap-3 text-base tracking-[2px] 
                   hover:border-b-2 hover:border-white pb-2 transition 
                   ${
                     isActive
                       ? "border-b-2 border-white"
                       : "border-b-2 border-transparent"
                   }`
                }
              >
                <span className="font-bold">{link.number}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden z-20"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <img src={hamburger} alt="Menu" className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 bg-white/5 backdrop-blur-xl z-30 flex flex-col px-8 py-8 transition-transform animate-slideIn">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="self-end mb-12"
          >
            <img src={closeIcon} alt="Close" className="w-6 h-6" />
          </button>

          {/* Nav Links */}
          <ul className="flex flex-col gap-8 uppercase tracking-widest text-white">
            {links.map((link) => (
              <li key={link.number}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex gap-3 text-base tracking-[2px] 
                     hover:border-r-2 hover:border-white pr-2 transition 
                     ${
                       isActive
                         ? "border-r-2 border-white"
                         : "border-r-2 border-transparent"
                     }`
                  }
                >
                  <span className="font-bold">{link.number}</span>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
