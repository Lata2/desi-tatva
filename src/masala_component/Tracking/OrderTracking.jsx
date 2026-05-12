import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import "./Tracking.css";  

export default function OrderTracking() {
  const [searchParams] = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get('order') || '');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrack = () => {
    if (!orderId) return alert('Enter Order ID');
    
    // Mock tracking data
    setTrackingInfo({
      id: orderId,
      date: '2026-04-19',
      items: ['Turmeric Powder (500g) x2', 'Garam Masala (100g) x1'],
      total: '₹165',
      courier: 'DTDC',
      phone: '+91 98765 43210',
      eta: 'Today 7-9 PM',
      status: 'Out for Delivery',
      timeline: [
        { step: 'Order Placed', time: '9:20 PM', done: true },
        { step: 'Processing', time: '10:30 PM', done: true },
        { step: 'Shipped', time: 'Apr 19, 10 AM', done: true },
        { step: 'Out for Delivery', time: 'Apr 19, 4 PM', done: false, current: true },
        { step: 'Delivered', time: '', done: false }
      ]
    });
  };

  return (
    <section className="tracking-section">
      <div className="container">
        <div className="page-header">
          <h1>📦 Track Order</h1>
          <p>Enter your order ID from confirmation email/SMS</p>
        </div>

        <div className="track-form">
          <input
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="#123456789"
          />
          <button onClick={handleTrack}>Track</button>
        </div>

        {trackingInfo && (
          <div className="tracking-details">
            <div className="order-summary">
              <h2>Order #{trackingInfo.id}</h2>
              <div className="summary-row">
                <span>Total:</span> <strong>₹{trackingInfo.total}</strong>
              </div>
              <div className="summary-row">
                <span>Courier:</span> <strong>{trackingInfo.courier}</strong>
              </div>
              <div className="summary-row">
                <span>ETA:</span> <strong>{trackingInfo.eta}</strong>
              </div>
              <div className="summary-row">
                <span>Status:</span> 
                <span className={`status-badge ${trackingInfo.status.toLowerCase()}`}>
                  {trackingInfo.status}
                </span>
              </div>
            </div>

            <div className="timeline">
              {trackingInfo.timeline.map((item, idx) => (
                <div key={idx} className={`timeline-step ${item.done ? 'done' : ''} ${item.current ? 'current' : ''}`}>
                  <div className="step-number">{idx + 1}</div>
                  <div className="step-content">
                    <div className="step-title">{item.step}</div>
                    <div className="step-time">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="courier-contact">
              <h3>Delivery Executive</h3>
              <a href={`tel:${trackingInfo.phone}`} className="call-btn">📞 Call {trackingInfo.phone}</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}