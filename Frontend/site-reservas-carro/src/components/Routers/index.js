import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from '../Pages/Home/components/Footer/Footer';
import Header from '../Pages/Home/components/Header/Header';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';


const RouteList = () => (
  <BrowserRouter>
    <HelmetProvider>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/product/details/:produc" element={<Details/>} />
      <Route path="/product/cart" element={<Cart />} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer/>
    </HelmetProvider>

  </BrowserRouter>
);

export default RouteList;