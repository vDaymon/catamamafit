import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Navbar = ({ mobileMenuOpen, menuVisible, menuAnim, openMenu, closeMenu }) => (
  <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-4">
      <nav className="container mx-auto flex justify-between items-center px-4 relative overflow-visible">
        <NavLink to="/" className="text-2xl font-bold text-pink-600 hover:text-primary-dark transition-colors transform duration-200 hover:scale-125">
          CatamamaFit
        </NavLink>
        {/* Desktop nav */}
        <div className="space-x-6 items-center hidden md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-lg font-medium transition-colors px-2 pb-1 transform duration-200 hover:scale-125 ${isActive ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-700 hover:text-pink-600'}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/retos"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors px-2 pb-1 transform duration-200 hover:scale-110 ${isActive ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-700 hover:text-pink-600'}`
            }
          >
            Retos
          </NavLink>
          <NavLink
            to="/proteina"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors px-2 pb-1 transform duration-200 hover:scale-110 ${isActive ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-700 hover:text-pink-600'}`
            }
          >
            Proteína
          </NavLink>
          <NavLink
            to="/guias"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors px-2 pb-1 transform duration-200 hover:scale-110 ${isActive ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-700 hover:text-pink-600'}`
            }
          >
            Guías
          </NavLink>
          {/* Iconos redes desktop */}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="ml-4 text-pink-500 hover:text-pink-700 transition-transform duration-200 transform hover:scale-125">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-transform duration-200 transform hover:scale-125">
            <FaTiktok className="w-6 h-6" />
          </a>
        </div>
        {/* Iconos redes mobile */}
        <div className="flex md:hidden items-center gap-5 mr-2">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-transform duration-200 transform hover:scale-125">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-transform duration-200 transform hover:scale-125">
            <FaTiktok className="w-6 h-6" />
          </a>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white transition z-50"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => {
            if (!menuVisible) openMenu();
            else closeMenu();
          }}
        >
          {mobileMenuOpen ? (
            <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </nav>
    </header>
    {/* Mobile dropdown menu below navbar */}
    <AnimatePresence>
      {menuVisible && (
        <div className="fixed left-0 right-0 md:hidden z-40" style={{ top: '64px' }}>
          <motion.div
            key="mobile-menu"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="bg-white shadow-lg flex flex-col items-center py-4 gap-1 overflow-hidden"
          >
          {[
            { to: '/', label: 'Inicio', end: true },
            { to: '/retos', label: 'Retos' },
            { to: '/proteina', label: 'Proteína' },
            { to: '/guias', label: 'Guías' }
          ].map((item, idx, arr) => (
            <div key={item.to} className="w-full flex justify-center">
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  'text-lg font-medium ' +
                  (isActive ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-700') +
                  (idx !== arr.length - 1 ? ' mb-3' : '')
                }
                onClick={closeMenu}
              >
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: idx * 0.2, duration: 0.7, type: 'spring' }}
                  className="inline-block"
                >
                  {item.label}
                </motion.span>
              </NavLink>
            </div>
          ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
);

export default Navbar;
