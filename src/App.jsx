import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './components/CommonComponents/Header/Header';
import Footer from './components/CommonComponents/Footer/Footer';
import Layout_LandingPage from './components/CommonComponents/Layout_LandingPage/Layout';
import Content from './components/CommonComponents/Content/Content';

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
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
