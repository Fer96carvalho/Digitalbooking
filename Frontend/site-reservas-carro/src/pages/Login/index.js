import { Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';

import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { BoxForm } from "../../components/Form";

export function Login() {
  const schema = yup.object({
    email: yup.string().email("Digite um e-mail valido.").required("Campo obrigatório."),
    password: yup.string().min(6, "Mínimo de 6 dígitos.").required("Campo obrigatório.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  function dataForm(data) {
    console.log(data)
  }

  return (
    <Container
      className="
        min-height-100
        d-flex
        justify-content-center
        align-items-center"
    >
      <BoxForm handleSubmit={handleSubmit} dataForm={dataForm}>
        <Form.Text
          as="p"
          className="d-block text-primary text-center fs-2 font-500 mb-5"
        >
          Iniciar Sessão
        </Form.Text>
        <Input type="text" name="email" label="E-mail" error={errors?.email} register={register}/>

        <InputPassword name="password" label="Senha" error={errors?.password} register={register}/>

        <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
          Entrar
        </Button>
        <Form.Text className="text-center d-block text-secondary mt-3">
          Ainda não tem conta?
          <Link className="text-decoration-none" to="/register"> Registre-se</Link>
        </Form.Text>
      </BoxForm>
    </Container>
  )
}

