import React from "react";
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './style.css';

function Search() {
    return (
        <div className="div-search">
            <Container fluid >
                <div className="slogan" variant="primary">
                <h1>Encontre os melhores carros mais pertos de você</h1>
                </div>
            <Form  >
                <Row>
                    <Form.Group className="mb-2">
                        <Form.Label >Cidade</Form.Label>
                        <Form.Control className="shadow-sm border-0" type="text" placeholder="Sua localização" />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-1">
                            <Form.Label>Data da retirada</Form.Label>
                            <Form.Control className="shadow-sm border-0" type="date" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1">
                            <Form.Label>Hora da retirada</Form.Label>
                            <Form.Control className="shadow-sm border-0" type="time" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1">
                            <Form.Label>Data da devolução</Form.Label>
                            <Form.Control className="shadow-sm border-0" type="date" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1">
                            <Form.Label>Hora da devolução</Form.Label>
                            <Form.Control className="shadow-sm border-0" type="time" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className=" d-flex justify-content-center">
                    <Button className=" text-white fw-bold m-3" variant="secondary" type="submit" >
                        Buscar
                    </Button>
                </Form.Group>
            </Form>
        </Container >
        </div>
            
    )
}

export default Search;