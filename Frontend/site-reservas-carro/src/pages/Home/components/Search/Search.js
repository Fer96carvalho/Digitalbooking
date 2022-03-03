import React from "react";
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function Search() {
    return (
        <Container fluid>
            <h1>Encontre os melhores carros mais pertos de você</h1>
            <Form className="w-100 bg-" >
                <Row>
                    <Form.Group className="mb-1">
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
                        <Form.Control className="shadow-sm border-0" type="time"  />
                    </Form.Group>
                    </Col>
                </Row>
               
                <Form.Group>
                    <Button className="w-75 text-white fw-bold mt-2" variant="primary" type="submit" >
                        Buscar
                    </Button>
                </Form.Group>
                

            </Form>
        </Container >
    )
}

export default Search;