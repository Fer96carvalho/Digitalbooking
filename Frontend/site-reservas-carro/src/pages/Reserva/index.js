import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Calendar } from '../Detalhes/components/Calendar'
import BannerInfo from './components/BannerInfo';
import DetalhesReserva from './components/DetalheReserva';
import FormHoraReserva from './components/HoraReserva';
import { Politicas } from '../Detalhes/components/Politicas';

import "./style.css";

export default function Reserva() {

    let selected = true;

    return (
        <>
            <section>
                <BannerInfo />
            </section>
            <section className="body-reserva">
                <section className="main-reserva">
                    {/* Section-form vai sumir caso o usuario esteva logado */}
                    <div className="section-form">
                        <div className="container-form">
                        <h2 className="d-block  text-primary fs-4 font-500">Complete seus dados</h2>
                        <Container
                            className="  justify-content-center align-items-center">
                            <Form className="div-form">
                                <Form.Group className="div-nome">
                                    <Form.Label className="font-size-15">Nome</Form.Label>
                                    <Form.Control className='shadow-sm mb-2 border border-white' type="text" placeholder="Digite seu nome" />
                                </Form.Group>
                                <Form.Group className="div-nome">
                                    <Form.Label className="font-size-15">Sobrenome</Form.Label>
                                    <Form.Control className='shadow-sm mb-2 border border-white' type="text" placeholder="Digite seu sobrenome" />
                                </Form.Group>
                                <Form.Group className="div-nome">
                                    <Form.Label className="font-size-15">E-mail</Form.Label>
                                    <Form.Control className='shadow-sm mb-2 border border-white' type="email" placeholder="Seu e-mail" />
                                </Form.Group>
                                <Form.Group className="div-nome">
                                    <Form.Label className="font-size-15">CNH</Form.Label>
                                    <Form.Control className='shadow-sm mb-2 border border-white' type="text" placeholder="Nº de registro da cnh" />
                                </Form.Group>  
                            </Form>
                        </Container>
                        </div>
                    </div>
                    <div>
                        <div className="div-calendar">
                            <h2 className=" text-primary fs-4 font-500 mb-4">Selecione a data da reserva</h2>
                            <Calendar selected={selected} />
                        </div>
                    </div>
                    <div>
                    <FormHoraReserva />
                    </div>
                </section>
                <section className="section-detalhe-reserva">
                    <DetalhesReserva/>
                </section>
            </section>
            <section>
                <Politicas/>
            </section>

        </>
    )
}
