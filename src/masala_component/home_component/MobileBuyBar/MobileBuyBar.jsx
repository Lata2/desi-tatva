import './MobileBuyBar.css';
import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MobileBuyBar() {
  return (
    <div className="mobile-buy-bar">
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
        <FaWhatsapp /> WhatsApp Chat
      </a>
      <Link to="/products">
        <FaShoppingCart /> Shop Now
      </Link>
    </div>
  );
}