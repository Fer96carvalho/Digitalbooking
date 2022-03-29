import React, { useState } from "react";
import DoubleCalendar from '../../../../components/DoubleCalendar';
import { Form, Button, Row, Col, Container, InputGroup} from 'react-bootstrap';
import {BsGeoAltFill} from "react-icons/bs";
import api from "../../../../services/api"


import './style.css';

function Search() {
    var dataCidades = [];

const handleInputChange = (e) => {
    e.preventDefault();

    const {value} = e.target;

//let url = "http://52.91.229.58:8080/cidade";
let url = "http://localhost:8080/cidade";

async function cidade() {


  await api.get('cidade')
  .then(response => {
      dataCidades = response.data
      console.log(dataCidades);
  }, error => {
    console.log(error);
  });
  console.log(dataCidades);
   
};

cidade();

// const cidade = fetch(url).then((data)=> console.log(data));



    // console.log ("handleInputChange" , value, value.length);
}

const handleSubmit = (e) => {
    e.preventDefault();
    const inputDatePicker = document.querySelector(".react-datepicker__input-container > input").value
    inputDatePicker === "" ? alert("Vazio") : alert(inputDatePicker);
}


    return (
        <div className="div-search">
            <Container fluid >
                <div className="slogan" variant="primary">
                <h1 className="text-dark">Encontre os melhores carros mais próximos de você!!!</h1>
                </div>
            <Form  >
                <Row>
                    <Col md={5}>
                    <Form.Group className="mb-2">
                        <Form.Label >Cidade</Form.Label>
                        <InputGroup>
                        <InputGroup.Text><BsGeoAltFill size="0.8em"/></InputGroup.Text>
                        <Form.Control size = "sm" className="shadow-sm border-0 max-width-100" type="text" placeholder="Sua localização" onChange={handleInputChange}/>
                        </InputGroup>
                    </Form.Group>
                    </Col>
                    <Col md={5}>
                    <Form.Group className="mb-1">
                    <Form.Label>Checkin | Checkout</Form.Label>
                    <div className="div-dcalendar">
                    <DoubleCalendar />
                    </div>
                    </Form.Group>  
                    </Col>
                    <Col md={2}>
                    <Form.Group className=" d-flex justify-content-center">
                    <Button className="text-white fw-bold m-3" variant="secondary" type="submit" onClick={handleSubmit}>
                        Buscar
                    </Button>
                </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container >
        </div>
    )
}

export default Search;