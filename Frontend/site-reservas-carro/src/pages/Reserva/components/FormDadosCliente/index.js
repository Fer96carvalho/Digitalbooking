import React from 'react';
import { Container, Form } from 'react-bootstrap';
import "./style.css";

export default function FormsCliente() {
    return (
        <>
            <div className="container-form">
                <h2 className="d-block  text-primary fs-4 font-500">Complete seus dados</h2>
                <Container
                    className="  justify-content-center align-items-center">
                    <Form className="div-form">
                        <Form.Group className="div-nome">
                            <Form.Label className="font-size-15">Nome</Form.Label>
                            <Form.Control className='shadow-sm mb-2 border border-white' type="text" placeholder="Digite seu nome" disabled />
                        </Form.Group>
                        <Form.Group className="div-nome">
                            <Form.Label className="font-size-15">Sobrenome</Form.Label>
                            <Form.Control className='shadow-sm mb-2 border border-white' type="text" placeholder="Digite seu sobrenome" disabled />
                        </Form.Group>
                        <Form.Group className="div-nome">
                            <Form.Label className="font-size-15">E-mail</Form.Label>
                            <Form.Control className='shadow-sm mb-2 border border-white' type="email" placeholder="Seu e-mail" disabled />
                        </Form.Group>
                        <Form.Group className="div-nome">
                            <Form.Label className="font-size-15">CNH</Form.Label>
                            <Form.Control className='shadow-sm mb-2 border border-white' type="text" placeholder="Nº de registro da cnh" />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        </>
    )
}
