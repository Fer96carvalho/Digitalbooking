import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/";
  import {Login} from "../pages/Login";
import { Register } from "../pages/Register";
import { HelmetProvider } from 'react-helmet-async';
import Search from "../pages/Home/components/Search/Search";

function Router() {
  return (
    <BrowserRouter>
      <HelmetProvider>  
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/busca" element={<Search />}/>
        </Routes>

      </HelmetProvider>
    </BrowserRouter>
  )
}

export default Router;


