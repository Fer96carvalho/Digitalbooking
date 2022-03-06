import { Link } from "react-router-dom";
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { BoxForm } from "../../components/Form";

import styled from './styles.module.scss';

export function Register() {
  const schema = yup.object({
    name: yup.string().required("Campo obrigatório."),
    lastname: yup.string().required("Campo obrigatório."),
    email: yup.string().email("Digite um e-mail valido.").required("Campo obrigatório."),
    password: yup.string().min(6, "Mínimo de 6 dígitos.").required("Campo obrigatório."),
    password_confirmation: yup.string().oneOf([
      null, yup.ref("password")
    ], "As senhas precisam ser iguais.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  function dataForm(data) {
    console.log(data)
  }

  return (
    <>
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
          Criar Conta
        </Form.Text>
        <div className={styled.responsive}>
          <Input type="text" name="name" label="Nome" error={errors?.name} register={register}/>
          <Input type="text" name="lastname" label="Sobrenome" error={errors?.lastname} register={register}/>
        </div>
        <Input type="text" name="email" label="E-mail" error={errors?.email} register={register}/>
        <InputPassword name="password" label="Senha" error={errors?.password} register={register}/>
        <Input type="password" name="password_confirmation" label="Confirmar senha" error={errors?.password_confirmation} register={register}/>

        <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
          Criar Conta
        </Button>
        <Form.Text className="text-center d-block text-secondary mt-3">
          Já tem uma conta?
          <Link className="text-decoration-none" to="/login"> Iniciar sessão</Link>
        </Form.Text>
      </BoxForm>
    </Container>
    </>
  )
}

