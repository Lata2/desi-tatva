import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../masala_component/header/Header';
import Footer from '../masala_component/footer/Footer';
import Chatbot from '../masala_component/chatboat/Chatboat';

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
