import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../image/desi-tatva-log.png';

import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import './Header.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop Categories', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Recipes / Blog', to: '/recipes' },
  { label: 'Bulk / B2B', to: '/dealer' },
  { label: 'Corporate Gifting', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', onEsc);

    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="header">

      {/* TOP STRIP */}
      <div className="top-strip">
        <div className="container top-strip-inner">

          <div className="top-strip-left">
            <span>Free Shipping above ₹499</span>
            <span>COD Available</span>
            <span>No Preservatives</span>
          </div>

          <div className="top-strip-right">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="top-whatsapp"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <span>EN / हिंदी</span>
          </div>

        </div>
      </div>

      {/* HEADER MAIN */}
      <div className="container header-main">

        {/* LOGO */}
        <Link to="/" className="header-logo">
          <img
            src={logo}
            alt="Desi Tatva"
            className="logo-img"
          />
        </Link>

        {/* SEARCH */}
        <div className="header-search" role="search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search products, recipes, offers..."
            aria-label="Search products"
          />
        </div>

        {/* ACTIONS */}
        <div className="header-actions">

          <div className="header-icons">

            <Link
              to="/wishlist"
              className="icon-btn"
              aria-label="Wishlist"
            >
              <FaHeart />
            </Link>

            <Link
              to="/account"
              className="icon-btn"
              aria-label="Account"
            >
              <FaUserCircle />
            </Link>

            <Link
              to="/products"
              className="icon-btn"
              aria-label="Cart"
            >
              <FaShoppingCart />
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* NAVIGATION */}
      <div className={`nav-shell ${menuOpen ? 'open' : ''}`}>

        <div className="container nav-shell-inner">

          <nav
            className="nav"
            id="primary-navigation"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={navLinkClass}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

        </div>

      </div>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
        />
      )}

    </header>
  );
}