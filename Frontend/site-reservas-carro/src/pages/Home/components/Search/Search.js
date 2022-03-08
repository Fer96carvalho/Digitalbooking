import React from "react";
import DoubleCalendar from '../../../../components/DoubleCalendar';
import MobileCalendar from '../../../../components/CalendarMobile';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './style.css';

function Search() {
    
    return (
        <div className="div-search">
            <Container fluid >
                <div className="slogan" variant="primary">
                <h1>Encontre os melhores carros mais proximos de você</h1>
                </div>
            <Form  >
                <Row>
                    <Col xs='auto'>
                    <Form.Group className="mb-2">
                        <Form.Label >Cidade</Form.Label>
                        <Form.Control size = "sm" className="shadow-sm border-0 max-width-100" type="text" placeholder="Sua localização" />
                    </Form.Group>
                    </Col>
                    <Col >
                    <Form.Group className="mb-1">
                    <Form.Label>Checkin | Checkout</Form.Label>
                    <DoubleCalendar className="shadow-sm border-0 max-width-100 form-control form-control-sm"/>
                    </Form.Group>
                        {/* <Form.Group className="mb-1">
                            <Form.Label>Data e Hora da retirada</Form.Label>
                            <Form.Control  size = "sm" className="shadow-sm border-0" type="datetime-local" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-1">
                            <Form.Label>Data e Hora da devolução</Form.Label>
                            <Form.Control size = "sm" className="shadow-sm border-0" type="datetime-local" />
                        </Form.Group> */}
                    </Col>
                    <Col xs='auto'>
                    <Form.Group className=" d-flex justify-content-center">
                    <Button className=" text-white fw-bold m-3" variant="secondary" type="submit">
                        Buscar
                    </Button>
                </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container >
        {/* <DoubleCalendar/> */}
        </div>
  
    )
}

export default Search;