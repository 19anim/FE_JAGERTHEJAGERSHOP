import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';
import { Route, Routes, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  // const [message, getMessage] = useState('')

  // useEffect(() => {
  //   async function getMessageFromBE() {
  //     const respone = await axios.get('/api/test')
  //     const responeData = respone.data.message
  //     getMessage(responeData);
  //   }
  //   getMessageFromBE()
  // }, [])

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
