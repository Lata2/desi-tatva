import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('123456');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(email, password);
      navigate('/account');
      setLoading(false);
    }, 1000);
  };

  if (user) {
    return <Navigate to="/account" replace />;
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>{isLogin ? 'Welcome Back' : 'Join Us'}</h1>
        <p>{isLogin ? 'Login to continue' : 'Create new account'}</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@example.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
            />
          </div>
          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? '⏳ Logging in...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>

        <div className="toggle-auth">
          {isLogin ? 'New customer?' : 'Existing user?'}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create Account' : 'Login'}
          </button>
        </div>
      </div>
    </section>
  );
}
