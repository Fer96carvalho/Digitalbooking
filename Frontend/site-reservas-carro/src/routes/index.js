import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/";
import {Login} from "../pages/Login";
import { Register } from "../pages/Register";
import { HelmetProvider } from 'react-helmet-async';
import { Header } from "../pages/Home/components/Header";
import Footer from "../pages/Home/components/Footer/Footer";
import Detalhes from "../pages/Detalhes";

function Router() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/detalhes/:id" element={<Detalhes />}/>

          {/* <Route path="/categorias" element={Category}/> */}
          {/* <Route path="/categoria/:category" element={Category}/> */}
          

        </Routes>
        <Footer/>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default Router;


