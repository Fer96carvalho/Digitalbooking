import React from "react";
import {Link} from 'react-router-dom';
import { } from 'bootstrap';
import logo from "../../../../Assets/img/logo1.png"
import './style.css';

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div class="div-logo">
                        <figure>
                            <Link to="/"><img src={logo} class="logo" alt="Logo da Digital Booking" width="50" height="50" /></Link>
                            
                        </figure>
                        <Link to="/"><h2>Digital Booking</h2></Link>
                        
                    </div>
                    <div class= "menu-mobile">
                        <div class="line 1"></div>
                        <div class="line 2"></div>
                        <div class="line 3"></div>

                    </div>
                    <div class="div-list">
                        <ul class="nav-list">
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