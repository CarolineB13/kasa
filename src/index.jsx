import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About';
import LogementDetails from './pages/LogementDetails';
import './styles/reset.css';
import './styles/index.css';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
      <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:id" element={<LogementDetails/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

