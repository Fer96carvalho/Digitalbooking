import { useState } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

function Login() {
  const [error, setError] = useState(true);

  return (
    <Container 
      className="
        min-height-100 
        d-flex 
        justify-content-center 
        align-items-center"
    >
      <Form className="w-100" style={{maxWidth: "350px"}}>
        <Form.Text className="d-block text-primary text-center fs-2 font-500 mb-5">Iniciar Sessão</Form.Text>
        <Form.Group className="mb-1">
          <Form.Label >E-mail</Form.Label>
          <Form.Control 
            className={error ? "border-1 border-danger shadow-sm" : "border-0"}
            type="email" 
            placeholder="Digite seu e-mail" 
          />
          <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Senha</Form.Label>
          <Form.Control className="shadow-sm border-0" type="password" placeholder="Digite sua senha" />
        </Form.Group>
        <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
          Entrar
        </Button>
        <Form.Text className="text-center d-block text-secondary mt-3">
          Ainda não tem conta? 
          <Link className="text-decoration-none" to="/register"> Registre-se</Link>
        </Form.Text>
      </Form>
    </Container>
  )
}

export default Login;