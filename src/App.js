import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import UserForm from './components/UserForm';
import AboutUs from './components/AboutUs'
import './App.css'
import NavbarLinks from './components/NavbarLinks';
import Service from './components/Service';
import Contact from './components/Contact';

const App = () => {
  
  return (
    <>
      <Router>
        <NavbarLinks />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about' element={<AboutUs />} />
          <Route exact path='/userForm' element={<UserForm />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  
    </>
  );
}

export default App;
