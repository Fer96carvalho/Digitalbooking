import React from "react";
import {Form, Button} from 'react-bootstrap';

function Search() {
    return (
        <div className="container">
            <h1>Encontre os melhores carros mais pertos de você</h1>

            <form>
                <label for="localizacao">Localização</label>
                <input type="text" id="localizacao" name="localizacao" value=""/>
                <label for="reserva">Data da reserva</label>
                <input type="date" id="reserva" name="reserva" value=""/>
            </form>

            <Form className="w-100 bg-" style={{ maxWidth: "350px" }}>
                
                <Form.Group className="mb-1">
                    <Form.Label >Cidade</Form.Label>
                    <Form.Control className="shadow-sm border-0" type="text" placeholder="Sua localização" style={{ maxWidth: "250px" }}/>
                    <Form.Label>Periodo de reserva</Form.Label>
                    <Form.Control className="shadow-sm border-0" type="date" style={{ maxWidth: "180px" }}/>
                    <Button className="w-75 text-white fw-bold mt-4" variant="primary" type="submit" style={{ maxWidth: "180px" }}>
                    Buscar
                </Button>
                </Form.Group>  
                                    
            </Form>
        </div>
    )
}

export default Search;