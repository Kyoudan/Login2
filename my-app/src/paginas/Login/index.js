import React from "react";
import '../../App.css';
import Logo from '../../img/desgraca.svg';

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";


const handleClickLogin = (values) => console.log(values);

const validationLogin = yup.object().shape({
    email: yup
        .string()
        .email("↪ Coloque um email valido!")
        .required("↪ E-mail obrigatorio"),

    password: yup
        .string()
        .min(8, "↪ A Senha deve ter 8 caracteres").
        required("↪ Senha obrigatoria!"),
});


const Page = () => { 

    let navigate = useNavigate();
    function MudarPagina() {
        navigate("/register");
    }


    return (
        <Formik initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}>
            <Form className="login-form">
                <div className="App">

                    <div className="Info login-form-group">
                    <img src={Logo} className="gloria"/>

                        <div className="area">

                            <h1>
                            LOGIN
                            </h1>

                            <Field 
                            name="text"
                            placeholder="Usuario"
                            className="form-field"></Field>

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


                            
                            <button className="button" type="submit">ACESSAR</button>
                            
                            <button onClick={MudarPagina}>Registre-se</button>
                            



                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default Page;