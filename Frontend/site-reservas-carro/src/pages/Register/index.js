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
  )
}






// <Form className="w-100" style={{maxWidth: "350px"}} onSubmit={handleSubmit(onSubmitHook)}>
//         <Form.Text className="d-block text-primary text-center fs-2 font-500 mb-5">Iniciar Sessão</Form.Text>
//         <Form.Group className="bg-success">
//           <Form.Label className="font-size-14">E-mail</Form.Label>
//           <Form.Control
//             {...register("email")}
//             className={`shadow-sm m-0 ${errors?.email && 'border-1 border-danger background-error-input '}`}
//             type="text"
//           />
//           <Form.Text className="text-danger">{errors?.email?.message}</Form.Text>
//         </Form.Group>


//         <Form.Group className="mb-1">
//           <Form.Label className="font-size-14">Senha</Form.Label>
//           <InputGroup className="shadow-sm">
//             <Form.Control
//               {...register("password")}
//               className={`shadow-sm m-0 ${errors?.password && 'border-1 border-danger background-error-input '}`}
//               type={showPassword ? "text" : "password"} />
//             <InputGroup.Text className="olho bg-light cursor border-white" onClick={() => setShowPassword(!showPassword)}>
//               <FontAwesomeIcon color="#7d8182" icon={showPassword ? faEye : faEyeSlash} />
//             </InputGroup.Text>
//           </InputGroup>
//           <Form.Text className="text-danger">{errors?.password?.message}</Form.Text>
//         </Form.Group>


//         <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
//           Entrar
//         </Button>
//         <Form.Text className="text-center d-block text-secondary mt-3">
//           Ainda não tem conta?
//           <Link className="text-decoration-none" to="/register"> Registre-se</Link>
//         </Form.Text>
//       </Form>
