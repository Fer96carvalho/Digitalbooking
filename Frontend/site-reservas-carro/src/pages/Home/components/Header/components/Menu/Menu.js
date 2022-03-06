import React, { useState } from "react";
import { Link } from 'react-router-dom';
import menu from "../../../../../../Assets/img/Menu.png";

import "./style.css";

function Menu({ firstName, lastName }) {
    let FirstName = "Fernando";
    let LastName = "Carvalho";


    return (
        <>
            <div className="menu-mobile">
                <div className="div-menu-mobile">
                    <img className="logo-menu-mobile" src={menu} alt="logo menu" />
                </div>
                <div className="div-user-mobile">
                    <div className="div-avatar-mobile">
                        <p className="avatar-name">{FirstName[0]}{LastName[0]}</p>
                    </div>
                    <p className="saudacao2"> Olá,</p>
                    <p className="nick-name">{FirstName} {LastName}</p>
                </div>
                <div className="div-btn-mobile">
                    <Link to="/register"><button>Criar conta</button></Link>
                </div>
                <div className="div-btn-mobile div-btn-mobile2">
                    <Link to="/login"><button className="btn-mobile2">Iniciar Sessão</button></Link>
                </div>
                <div className="user-logout-mobile">
                    <p>
                        Deseja  <a className="logout-link" href=" ">encerrar a sessão?</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Menu;