import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/";
import {Login} from "../pages/Login";
import { Register } from "../pages/Register";
import { HelmetProvider } from 'react-helmet-async';
import { Header } from "../pages/Home/components/Header";
import Footer from "../pages/Home/components/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          {/* <Route path="/categories" element={Category}/> */}
          {/* <Route path="/category/:category" element={Category}/> */}
          {/* <Route path="/product/:id" element={Details}/> */}

        </Routes>
        <Footer/>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default Router;


