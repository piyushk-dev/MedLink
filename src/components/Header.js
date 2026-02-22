import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaBars, FaX, FaHeartPulse } from "react-icons/fa6";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("logintoken");
  let sub;
  if (loginToken) sub = jwtDecode(loginToken)["sub"];

  const handleLogout = () => {
    localStorage.removeItem("logintoken");
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <FaHeartPulse className="text-2xl text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">MedLink</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/hospital">Find Hospital</NavItem>
            <NavItem to="/appointments">Book Appointment</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>

          {/* Right Side - Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            {!loginToken ? (
              <Link
                to="/login"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Login / Sign Up
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-slate-700 font-medium">{sub}</span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-900 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaX className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-2 py-4">
              <MobileNavItem to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavItem>
              <MobileNavItem to="/hospital" onClick={() => setIsMobileMenuOpen(false)}>Find Hospital</MobileNavItem>
              <MobileNavItem to="/appointments" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</MobileNavItem>
              <MobileNavItem to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileNavItem>
              <MobileNavItem to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavItem>

              <div className="border-t border-slate-200 pt-4 mt-4">
                {!loginToken ? (
                  <Link
                    to="/login"
                    className="block w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login / Sign Up
                  </Link>
                ) : (
                  <div className="space-y-3">
                    <p className="text-slate-700 font-medium text-center">{sub}</p>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 text-slate-700 font-medium hover:text-blue-600 transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="px-4 py-2 text-slate-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
