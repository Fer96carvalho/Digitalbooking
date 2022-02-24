import React from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../../../Assets/img/facebook-brands.svg';
import linkedin from '../../../../Assets/img/linkedin-in-brands.svg';
import twitter from '../../../../Assets/img/twitter-brands.svg';
import instagram from '../../../../Assets/img/instagram-brands.svg';

import './style.css'

function Footer () {
    return (
        <>
            <footer className="rodape">
                <div className="rodape__Copyright">
                    <p>@2021 Digital Booking</p>
                </div>

                <div className="rodape__Social">
                    <ul>
                        <li><img src={facebook} /></li>
                        <li><img src={linkedin} /></li>
                        <li><img src={twitter} /></li>
                        <li><img src={instagram} /></li>

                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;