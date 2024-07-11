import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import LogementDetails from './pages/LogementDetails';
import './styles/reset.css';
import './styles/styles.scss';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/logement/:id" element={<LogementDetails />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);