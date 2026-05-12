import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Layout from './Layout';

import Home from '../masala_component/home_component/home/Home.jsx';
import About from '../masala_component/about/About';
import Product from '../masala_component/product/Product';
import ProductDetails from '../masala_component/product/Product_details';
import Contact from '../masala_component/contact/Contact';
import Recipes from '../masala_component/RecipesSection/Recipes';
import Choose from '../masala_component/choose/Choose';
import Quality from '../masala_component/quality/Quality';
import Testimonials from '../masala_component/testimonials/Testimonials';
import Offers from '../masala_component/offer/Offers';
import Dealer from '../masala_component/dealer/Dealer';
import Login from '../masala_component/auth/Login';
import Account from '../masala_component/account/Account.jsx';
import OrderTracking from '../masala_component/Tracking/OrderTracking';
import FAQ from '../masala_component/FAQ/FAQ';
import Gallery from '../masala_component/Gallery/Gallery';
import Career from '../masala_component/Career/Career';
import Privacy from '../masala_component/privacy/Privacy.jsx';
import Terms from '../masala_component/Legal/Terms';
import Refund from '../masala_component/refund/Refund';
import Shipping from '../masala_component/Shipping/Shipping';


export default function MainContent() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="choose" element={<Choose />} />
          <Route path="quality" element={<Quality />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="offers" element={<Offers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dealer" element={<Dealer />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="track" element={<OrderTracking />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="careers" element={<Career />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
