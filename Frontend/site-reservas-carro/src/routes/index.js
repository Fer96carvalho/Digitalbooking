import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index.js";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HelmetProvider } from 'react-helmet-async';
export function Router() {
  return (
    <BrowserRouter>
      <HelmetProvider>  
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>

      </HelmetProvider>
    </BrowserRouter>
  )
}


