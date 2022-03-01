import { BrowserRouter } from "react-router-dom"
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';
import { Route, Routes, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';
import TelegramBot from './pages/TelegramBot/TelegramBot';

function App() {
  const [orderCount, setOrderCount] = useState(parseInt(localStorage.getItem('orderCount')))
  if (localStorage.getItem('orderCount') === null)
    localStorage.setItem('orderCount', 0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage orderCount={orderCount} setOrderCount={setOrderCount} />} />
        <Route path="products" exact element={<ProductPage orderCount={orderCount} setOrderCount={setOrderCount} />} />
        <Route path="ZaloAPI" exact element={<TelegramBot orderCount={orderCount} setOrderCount={setOrderCount} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
