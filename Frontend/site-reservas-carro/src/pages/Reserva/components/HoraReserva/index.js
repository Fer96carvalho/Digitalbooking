import React from 'react';
import { Container, Form } from 'react-bootstrap';


export default function FormHoraReserva() {
  return (
    <div className="section-form m-5 ">
                    <h2 className=" text-primary fs-4 font-500">Horário de retirada e devolução entre 06h00 e 24h00</h2>
                    <Container className="container-select-hora ">
                        <Form className="div-form">
                            <div className="div-input-hora mt-3">
                            <Form.Label className="font-size-15">Hora de retirada</Form.Label>
                            <Form.Select className="form-select-retirada">
                                <option>selecione</option>
                                <option value="06:00">06:00 AM</option>
                                <option value="07:00">07:00 AM</option>
                                <option value="08:00">08:00 AM</option>
                                <option value="09:00">09:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">13:00 PM</option>
                                <option value="14:00">14:00 PM</option>
                                <option value="15:00">15:00 PM</option>
                                <option value="16:00">16:00 PM</option>
                                <option value="17:00">17:00 PM</option>
                                <option value="18:00">18:00 PM</option>
                                <option value="19:00">19:00 PM</option>
                                <option value="20:00">20:00 PM</option>
                                <option value="21:00">21:00 PM</option>
                                <option value="22:00">22:00 PM</option>
                                <option value="23:00">23:00 PM</option>
                                <option value="00:00">00:00 AM</option>
                            </Form.Select>
                            </div>
                           <div className="div-input-hora mt-3">
                           <Form.Label className="font-size-15">Hora de devolução</Form.Label>
                           <Form.Select className="form-select-devolucao">
                                <option>selecione</option>
                                <option value="06:00">06:00 AM</option>
                                <option value="07:00">07:00 AM</option>
                                <option value="08:00">08:00 AM</option>
                                <option value="09:00">09:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">13:00 PM</option>
                                <option value="14:00">14:00 PM</option>
                                <option value="15:00">15:00 PM</option>
                                <option value="16:00">16:00 PM</option>
                                <option value="17:00">17:00 PM</option>
                                <option value="18:00">18:00 PM</option>
                                <option value="19:00">19:00 PM</option>
                                <option value="20:00">20:00 PM</option>
                                <option value="21:00">21:00 PM</option>
                                <option value="22:00">22:00 PM</option>
                                <option value="23:00">23:00 PM</option>
                                <option value="00:00">00:00 AM</option>
                            </Form.Select>
                           </div>
                        </Form>
                    </Container>
                </div>
  )
}
