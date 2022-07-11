import React from "react";
import '../../App.css';
import Logo from '../../img/desgraca.svg';

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from "axios";

import { useNavigate } from "react-router-dom";


const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
        email: values.email,
        password: values.password,
        
    }).then((response) => {
        console.log(response)
    } )
};

const validationRegister = yup.object().shape({
    email: yup
        .string()
        .email("↪ Coloque um e-mail valido!")
        .required("↪ E-mail obrigatorio!"),

    password: yup
        .string()
        .min(8, "↪ A Senha deve ter 8 caracteres").
        required("↪ Senha obrigatoria!"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais")
        .required("Este campo é obrigatorio"),
});


const Page = () => { 

    let navigate = useNavigate();
    function MudarPagina() {
        navigate("/");
    }


    return (
        <Formik initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}>
            <Form className="login-form">
                <div className="App">

                    <div className="Info login-form-group">
                    <img src={Logo} className="gloria"/>

                        <div className="area">

                            <h1>
                            REGISTER
                            </h1>



                            <Field 
                            name="email"
                            placeholder="E-mail"
                            className="form-field"></Field>

                            <ErrorMessage
                            component="span"
                            name="email"
                            className="form-error"/>

                            <Field 
                            name="password"
                            placeholder="Senha"
                            className="form-field"></Field>

                            <ErrorMessage
                            component="span"
                            name="password"
                            className="form-error"/>

                            <Field 
                            name="confirmPassword"
                            placeholder="Confirme sua senha"
                            className="form-field"></Field>

                           <ErrorMessage
                            component="span"
                            name="confirmPassword"
                            className="form-error"/>



                            
                            <button className="button" type="submit">REGISTRAR</button>
                            
                            <button onClick={MudarPagina}>Login</button>
                            




                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default Page;