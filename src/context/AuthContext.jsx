/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const getSavedUser = () => {
  try {
    const savedUser = localStorage.getItem('masalaUser');
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
};

const getSavedOrders = () => {
  try {
    const savedOrders = localStorage.getItem('masalaOrders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  } catch {
    return [];
  }
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getSavedUser());
  const [orders, setOrders] = useState(() => getSavedOrders());

  const login = (email) => {
    const mockUser = {
      id: 1,
      email,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      orders: Math.floor(Math.random() * 10) + 1,
    };
    setUser(mockUser);
    localStorage.setItem('masalaUser', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('masalaUser');
    localStorage.removeItem('masalaOrders');
  };

  const addOrder = (order) => {
    const newOrders = [...orders, { id: Date.now(), date: new Date().toISOString(), ...order }];
    setOrders(newOrders);
    localStorage.setItem('masalaOrders', JSON.stringify(newOrders));
  };

  return <AuthContext.Provider value={{ user, login, logout, orders, addOrder }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
