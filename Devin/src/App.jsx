import React from 'react';
import './app.css';
import Router from './router/Router';
import Navbar from './components/theme/navbaar/Navbar';
import Footer from './components/theme/footer/Footer';
const App = () => {
  return (
    <>
      <Router />
      <Footer/>
    </>
  );
}

export default App;