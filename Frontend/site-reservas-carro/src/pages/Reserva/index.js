import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AiOutlineLeft } from "react-icons/ai";
import { Calendar } from '../Detalhes/components/Calendar'
import FormHoraReserva from './components/HoraReserva';

import "./style.css";




export default function Reserva() {
    var selected = true;
    function goBack() {
        window.history.back()
    }


    return (
        <>
            <div className="section-cabecalho">
                <div className="div-titulo">
                    <h4> Categoria</h4>
                    <h2> Fiat Argo</h2>
                </div>
                <div className="div-btn-voltar">
                    <button type="button"><AiOutlineLeft color="fff" size="2.7em" onClick={goBack} /></button>
                </div>
            </div>
            <section className="main-reserva">
                <div className="section-form m-5">
                    <Container
                        className="  justify-content-center align-items-center">
                        <Form>
                            <Form.Text as="p" className="d-block  text-primary fs-4 font-500">
                                Complete seus dados
                            </Form.Text>
                        </Form>
                        <Form className="div-form">
                            <Form.Group className="div-nome">
                                <Form.Label className="font-size-15">Nome Completo</Form.Label>
                                <Form.Control className='shadow-sm m-0 border border-white' type="text" placeholder="Digite seu nome completo" />
                            </Form.Group>
                            <Form.Group className="div-nome">
                                <Form.Label className="font-size-15">CPF</Form.Label>
                                <Form.Control className='shadow-sm m-0 border border-white' type="text" placeholder="Seu cpf" />
                            </Form.Group>
                            <Form.Group className="div-nome">
                                <Form.Label className="font-size-15">CNH</Form.Label>
                                <Form.Control className='shadow-sm m-0 border border-white' type="text" placeholder="Nº de registro da cnh" />
                            </Form.Group>
                            {/* <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
                            Confirmar reserva
                        </Button> */}
                        </Form>
                    </Container>
                </div>
                <div>
                    <div className="m-5">
                        <h2 className=" text-primary fs-4 font-500">Selecione a data da reserva</h2>
                        <Calendar selected={selected} />
                    </div>
                </div>
                <FormHoraReserva/>
            </section>

        </>
    )
}
