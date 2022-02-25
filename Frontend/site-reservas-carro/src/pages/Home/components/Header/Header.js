import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { } from 'bootstrap';
import logo from "../../../../Assets/img/logo1.png"
import menu from '../../../../Assets/img/Menu.png'
import './style.css';

function Header() {

   return (
        <>
            <header>
                <nav>
                    <div className="div-logo">
                        <figure>
                            <Link to="/"><img src={logo} className="logo" alt="Logo da Digital Booking" width="60" height="50" /></Link>
                            
                        </figure>
                        <div className="div-nomepagina">
                        <Link to="/"><h2>Digital Booking</h2></Link>

                        </div>
                        
                    </div>
                    <div className= "menu-mobile">
                        <img className='logo-menu' src={menu} alt="Logo do Menu"/>

                    </div>
                    <div className="div-list">
                        <ul className="nav-list">
                            <li>
                                <Link  to="/register">Criar conta</Link>
                            </li>
                            <li>
                            <Link to="/login">Iniciar Sessão</Link>
                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
};

export default Header;