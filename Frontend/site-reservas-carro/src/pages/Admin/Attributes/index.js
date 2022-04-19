import { Col, Container, Row, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";

import { MdOutlineAdd, MdOutlineClose } from 'react-icons/md';

import styled from './styles.module.scss';

export function Attibutes({attributes, setAttributes}) {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");

  function handleAddAttribute() {
    let error = false;

    if(name.length === 0) {
      setErrorName("Campo Obrigatório");
      error = true;
    }

   

    if(error) return;

    setErrorName("");
    setName("");
    
    const newAttribute = {
      name
    }

    setAttributes([...attributes, newAttribute]);
  }

  function handleDeleteAttribute(name) {
    const attibutesFilter = attributes.filter(item => item.name !== name);
    setAttributes(attibutesFilter);
  }

  return (
    <Container fluid className="m-0 mt-4">
      <h2 className="fs-5 font-600">Adicionar Atributos</h2>

      {attributes?.map((attribute) => (
        <Container fluid className={`m-0 px-4 py-3 rounded mb-2 ${styled.background}`}>
          <Row key={attribute.id}>
              <Col xs={10} sm={11} md={7}>
                <Container fluid className="m-0 p-0 mb-2">
                  <Form.Label htmlFor="description" className="m-0 p-0 fs-14 mb-1 font-500">Nome</Form.Label>
                  <InputGroup className={`m-0 p-0 w-100 rounded ${styled.shadow_input}`}>
                    <FormControl 
                      id="name" 
                      className="border-0"
                      onChange={(e) => setName(e.target.value)} 
                      value={attribute.name}
                      disabled
                    />
                  </InputGroup>
                </Container>
              </Col>
              
              <Col xs={2} sm={1} md={1} className="p-0">
                <div className="w-100 h-100 d-md-flex justify-content-end align-items-end pb-md-2">
                  <Button 
                    className="p-0 m-0 bg-secondary border-0" 
                    onClick={() => handleDeleteAttribute(attribute.name)}>
                      <MdOutlineClose color="#ffffff" size={34}/>
                  </Button>
                </div>
              </Col>
          </Row>
        </Container>
      ))}





      <Container fluid className={`m-0 px-4 py-3 rounded ${styled.background}`}>
          <Row>
          <Col sm={10} md={11} xs={10}>
                <Container fluid className="m-0 p-0 mb-2">
                  <Form.Label htmlFor="description" className="m-0 p-0 fs-14 mb-1 font-500">Nome</Form.Label>
                  <InputGroup className={`m-0 p-0 w-100 rounded ${styled.shadow_input}`}>
                    <FormControl 
                      id="name" 
                      className={`${errorName ? 'border border-danger' : 'border border-white'}`} 
                      onChange={(e) => setName(e.target.value)} 
                      value={name}
                    />
                  </InputGroup>
                  <Form.Text className="text-danger">{errorName && errorName}</Form.Text>
                </Container>
              </Col>
              <Col sm={2} md={1} xs={2} className="p-0">
                <div className="w-100 h-100 d-flex justify-content-end align-items-end pb-2">
                  <Button className="p-0 m-0" onClick={handleAddAttribute}><MdOutlineAdd color="#ffffff" size={34}/></Button>
                </div>
              </Col>
          </Row>
      </Container>
    </Container>
  )
}