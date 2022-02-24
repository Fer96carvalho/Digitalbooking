import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../../../../Assets/img/logo1.png"
import './style.css'

function Header() {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="xl">
                    <Container>
                        <Navbar.Brand class="container-logo" as={Link} to="/">
                            <div>
                            <figure>
                                <img src={logo} className="m-2" alt="Logo da Digital Booking" width="50" height="50" />
                            </figure>
                            </div>
                            <div>
                                <h2>Sinta-se em casa</h2>
                            </div>                            
                            
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link as={Link} to="/register">
                                    Criar conta
                                </Nav.Link>
                                <Nav.Link as={Link} to={'/login'}>
                                    Iniciar Sessão
                                </Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
};

export default Header;