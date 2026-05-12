import React from 'react';
// import "./Shipping.css";

export default function Shipping() {
  return (
    <section className="shipping-section">
      <div className="container">
        <h1>Shipping Policy</h1>
        
        <div className="shipping-rates">
          <h2>Shipping Charges</h2>
          <table className="rates-table">
            <thead>
              <tr>
                <th>Location</th>
                <th>Min Order</th>
                <th>Shipping</th>
                <th>Delivery Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlight">
                <td>Raipur City</td>
                <td>₹2000</td>
                <td><strong>FREE</strong></td>
                <td>24 hrs</td>
              </tr>
              <tr>
                <td>Chhattisgarh</td>
                <td>-</td>
                <td>₹50</td>
                <td>2-3 days</td>
              </tr>
              <tr>
                <td>India</td>
                <td>-</td>
                <td>₹100</td>
                <td>4-7 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="shipping-info">
          <h2>Delivery Details</h2>
          <div className="info-grid">
            <div>
              <h4>Payment</h4>
              <p>COD • UPI • Cards • Netbanking</p>
            </div>
            <div>
              <h4>Courier Partners</h4>
              <p>DTDC • Delhivery • EKart</p>
            </div>
            <div>
              <h4>Packaging</h4>
              <p>Tamper-proof, heat-sealed</p>
            </div>
            <div>
              <h4>Track</h4>
              <p>SMS/Email updates + <a href="/track">Live Tracking</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}