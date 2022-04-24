import React, { useEffect } from 'react';
import facebook from '../../../../Assets/img/facebook-brands.svg';
import linkedin from '../../../../Assets/img/linkedin-in-brands.svg';
import twitter from '../../../../Assets/img/twitter-brands.svg';
import instagram from '../../../../Assets/img/instagram-brands.svg';
import CookieConsent from 'react-cookie-consent';

import './style.css'



// const handleCookies = (e) => {

//     e.preventDefault();
//     document.querySelector(".box-cookies").classList.add('hide');
//     localStorage.setItem("avsCookies", "accept");

// }

// const avsCookies = () => {
    
//     if (!localStorage.getItem("avsCookies")) {
//         document.querySelector(".box-cookies").classList.remove('hide');
//     }

// }

// avsCookies();


function Footer () {



    return (
        <>
            <footer className="rodape">

                {/* <div className="box-cookies hide">
                    <p className="msg-cookies">
                        Nosso site utiliza cookies para melhorar sua experiência em nossos serviços. Ao navegar, você concorda com nossa política de privacidade.
                    </p>
                    <Button className="btn-cookies" onClick={handleCookies}>
                        Entendi
                    </Button>
                </div> */}

                <div className="rodape__Copyright">
                    <p className="copyright">@2022 Digital Booking</p>
                </div>
                <div className="rodape__Social">
                    <ul>
                        <li><img src={facebook} alt="Facebook" /></li>
                        <li><img src={linkedin} alt="Linkedin" /></li>
                        <li><img src={twitter} alt="Twitter" /></li>
                        <li><img src={instagram} alt="Instagram" /></li>
                    </ul>
                </div>

                <CookieConsent
                    location="bottom"
                    style={{
                        background: 'rgba(0, 0, 0, 0.8)',
                        textAlign: "left",
                        marginBottom: '70px',
                        fontSize: '13px',
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        color: '#000',
                        fontSize: '14px',
                        borderRadius: '5px',
                    }}
                    buttonText="Entendi"
                    expires={365}
                    >
                    Este site utiliza cookies para melhorar sua experiência em nossos serviços. Ao navegar, você concorda com nossa política de privacidade.
                </CookieConsent>

            </footer>



        </>
    )
}

export default Footer;