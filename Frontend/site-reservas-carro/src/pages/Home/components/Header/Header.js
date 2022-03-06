import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../../../Assets/img/logo1.png"
import Menu from "./components/Menu/Menu";
import './style.css';

function Header({firstName, lastName}) {
    let FirstName = "Fernando";
    let LastName = "Carvalho";

    return (
        <>
            <header>
                <div className="div-logo">
                    <figure>
                        <Link to="/"><img src={logo} className="logo" alt="Logo da Digital Booking" width="60" height="50" /></Link>
                    </figure>
                    <div className="div-nomepagina">
                        <Link to="/"><h2>Digital Booking</h2></Link>
                    </div>
                </div>
                <nav>
                    <div className="div-btn">
                        <Link to="/register"><button>Criar conta</button></Link>
                        <Link to="/login"><button>Iniciar Sessão</button></Link>
                    </div>
                    <div className="div-user">
                            <div className="div-avatar">
                                <p>{FirstName[0]}{LastName[0]}</p>
                            </div>
                            <div className="name-user">
                            <p className="saudacao">Olá, </p>
                            <p>{FirstName} {LastName}</p> 
                            </div>
                            <div className="user-logout">
                            <p>X</p>
                            </div>
                    </div>
                    <Menu firstName={firstName} lastName={lastName}/>
                    
                </nav>
            </header>
        </>
    )
};

export default Header;