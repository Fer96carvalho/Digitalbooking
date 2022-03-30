import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AiOutlineLeft } from "react-icons/ai";
import { Calendar } from '../Detalhes/components/Calendar'

import "./style.css";




export default function Reserva() {

    function goBack() {
        window.history.back()
    }


    return (
        <>
            <section className="section-cabecalho">
                <div className="div-titulo">
                    <h4> Categoria</h4>
                    <h2> Fiat Argo</h2>
                </div>
                <div className="div-btn-voltar">
                    <button type="button"><AiOutlineLeft color="fff" size="2.7em" onClick={goBack} /></button>
                </div>
            </section>
            <div>
            <section className="section-form">
                <Container
                    className="  justify-content-center align-items-center">
                        <Form>
                        <Form.Text as="p" className="d-block text-primary fs-2 font-500">
                            Complete seus dados
                        </Form.Text>
                        </Form>
                    <Form className="div-form">
                            <Form.Group className="div-nome">
                                <Form.Label className="font-size-14">Nome Completo</Form.Label>
                                <Form.Control className='shadow-sm m-0 border border-white' type="text" placeholder="Digite seu nome completo" />
                            </Form.Group>
                            <Form.Group className="div-nome">
                                <Form.Label className="font-size-14">CPF</Form.Label>
                                <Form.Control className='shadow-sm m-0 border border-white' type="text" placeholder="Seu cpf" />
                            </Form.Group>
                            <Form.Group className="div-nome">
                                <Form.Label className="font-size-14">CNH</Form.Label>
                                <Form.Control className='shadow-sm m-0 border border-white' type="text" placeholder="Nº de registro da cnh" />
                            </Form.Group>
                        {/* <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
                            Confirmar reserva
                        </Button> */}
                    </Form>
                </Container>
            </section>
            <section>
                <div>
                    <Calendar/>
                </div>
            </section>
            </div>
            
        </>
    )
}
