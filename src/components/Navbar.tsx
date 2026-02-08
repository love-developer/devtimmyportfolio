import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, LogOut, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
// import Logo from '../../public/Images/logo.jpeg';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-white/80 dark:bg-dark/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/5 shadow-lg" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 overflow-hidden shadow-lg shadow-primary-600/20 group-hover:shadow-primary-600/40 transition-all">
            <img
              src="/Images/logo.jpeg"
              alt="Areotech Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-black font-jakarta hidden sm:block tracking-tighter uppercase">
            AREOTECH
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary-500 ${location.pathname === link.path ? "text-primary-600" : "text-slate-600 dark:text-slate-400"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-white/10 pl-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  <User size={20} />
                </Link>
                <button
                  onClick={logout}
                  className="p-2.5 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="px-6 py-3 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-600/30 uppercase tracking-widest"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-dark border-l border-slate-200 dark:border-white/5 shadow-2xl z-50 md:hidden"
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img
                    src="/Images/logo.jpeg"
                    alt="Areotech Logo"
                    className="w-10 h-10 object-cover"
                  />
                  <span className="text-2xl font-black font-jakarta tracking-tighter uppercase">
                    AREOTECH
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <X size={32} />
                </button>
              </div>
              <div className="space-y-4 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-5 text-2xl font-black text-slate-700 dark:text-slate-300 hover:text-primary-500 border-b border-slate-100 dark:border-white/5 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-8">
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full py-5 text-center bg-red-500/10 text-red-500 rounded-2xl font-black text-xl"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-5 text-center bg-primary-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-primary-600/30"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
