import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button, Container, Spinner, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "react-bootstrap";
import * as yup from "yup";

import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { BoxForm } from "../../components/Form";

import { useMutation } from "react-query";
import api from "../../services/api";
import { useSession } from "../../hooks/useSession";
import { useState } from "react";

export function Login() {
  const { createSession } = useSession();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const schema = yup.object({
    email: yup.string().email("Digite um e-mail valido.").required("Campo obrigatório."),
    password: yup.string().min(6, "Mínimo de 6 dígitos.").required("Campo obrigatório.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSubmitForm(value) {
      console.log(value)
      try{
        await api.post("/login", {
          email: value.email,
          senha: value.password,
        })
      createSession({ email: value.email, senha: value.password });
        navigate("/");
      }catch(error){
        console.log(error)
      }
  }

  return (
    <>
      <Helmet>
        <title> Digital Booking | Login</title>
      </Helmet>
      <Container
        className="
        d-flex
        min-height-100
        justify-content-center
        align-items-center"
      >
        <BoxForm handleSubmit={handleSubmit} dataForm={handleSubmitForm}>
        <Form.Text
          as="p"
          className="d-block text-primary text-center fs-2 font-500 mb-4"
        >
          Iniciar Sessão
        </Form.Text>
        {isError && (
          <Alert variant="danger" className="py-2 text-center">
            e-mail ou senha inválidos.
          </Alert>
        )}
        <Input
          type="text"
          name="email"
          label="E-mail"
          register={register}
          error={errors.email}
        />

        <InputPassword
          name="password"
          label="Senha"
          register={register}
          error={errors.password}
        />

        <Button
          className="w-100 text-white fw-bold mt-4"
          variant="primary"
          type="submit"
          disabled={isLoading ? true : false}
          // onClick={handleSubmit}
        >
          {isLoading ? <Spinner animation="grow" size="sm" /> : "Entrar"}
        </Button>
        <Form.Text className="text-center d-block text-secondary mt-3">
          Ainda não tem conta?
          <Link
            className="text-decoration-none font-500 text-primary"
            to="/register"
          >
            {" "}
            Registre-se
          </Link>
        </Form.Text>
        </BoxForm>

        <Link className="fechar__Login" to="/">
          {" "}
          X{" "}
        </Link>
      </Container>
    </>
  );
}

// import { Link } from "react-router-dom";
// import { Button, Container } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Form } from 'react-bootstrap';
// import * as yup from 'yup';

// import { Input } from '../../components/Input';
// import { InputPassword } from '../../components/InputPassword';
// import { BoxForm } from "../../components/Form";

// export function Login() {
//   const schema = yup.object({
//     email: yup.string().email("Digite um e-mail valido.").required("Campo obrigatório."),
//     password: yup.string().min(6, "Mínimo de 6 dígitos.").required("Campo obrigatório.")
//   });

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   function dataForm(data) {
//     console.log(data)
//   }

//   return (
//     <>
//     <Container
//       className="
//         min-height-100
//         d-flex
//         justify-content-center
//         align-items-center"
//     >
//       <BoxForm handleSubmit={handleSubmit} dataForm={dataForm}>
//         <Form.Text
//           as="p"
//           className="d-block text-primary text-center fs-2 font-500 mb-5"
//         >
//           Iniciar Sessão
//         </Form.Text>
//         <Input type="text" name="email" label="E-mail" error={errors?.email} register={register}/>

//         <InputPassword name="password" label="Senha" error={errors?.password} register={register}/>

//         <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
//           Entrar
//         </Button>
//         <Form.Text className="text-center d-block text-secondary mt-3">
//           Ainda não tem conta?
//           <Link className="text-decoration-none" to="/register"> Registre-se</Link>
//         </Form.Text>
//       </BoxForm>
//     </Container>
//     </>
//   )
// }
