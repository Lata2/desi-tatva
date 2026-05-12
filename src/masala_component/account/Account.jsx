import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
// import "./Account.css";

export default function Account() {
  const { user, orders, logout } = useAuth();

  if (!user) return <div className="empty-state">Please <Link to="/login">login</Link> to view account</div>;

  return (
    <section className="account-section">
      <div className="container">
        <div className="account-header">
          <h1>Hi, {user.name}! 👋</h1>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>

        {/* Quick Stats */}
        <div className="account-stats">
          <div>Total Orders: {user.orders}</div>
          <div>Saved Addresses: 2</div>
          <div>Wishlist: 3</div>
        </div>

        {/* Order History */}
        <div className="orders-section">
          <h2>Recent Orders</h2>
          {orders.length === 0 ? (
            <div className="empty-state">
              No orders yet. <Link to="/">Shop now →</Link>
            </div>
          ) : (
            <div className="orders-list">
              {orders.slice(-3).map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-id">#{order.id}</div>
                  <div className="order-date">{new Date(order.date).toLocaleDateString()}</div>
                  <div className="order-total">₹{order.total}</div>
                  <span className={`status ${order.status}`}>{order.status}</span>
                  <Link to={`/track?order=${order.id}`}>Track</Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Saved Addresses */}
        <div className="addresses-section">
          <h2>Saved Addresses</h2>
          <div className="address-list">
            <div className="address-card">
              <strong>Priya Sharma</strong><br/>
              Raipur, Chhattisgarh 492001<br/>
              +91 99999 99999
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}