import React from "react";
import '../../App.css';
import Logo from '../../img/desgraca.svg';

import { useNavigate } from "react-router-dom";

const Page = () => { 

    let navigate = useNavigate();
    function MudarPagina() {
        navigate("/");
    }
    
    return (
        <div className="App">

            <div className="Info">
            <img src={Logo} className="gloria"/>

                <div className="area">

                    <h1>
                    REGISTRAR
                    </h1>

                    <input 
                    type="text"
                    placeholder="Usuario"></input>

                    <input 
                    type="email"
                    placeholder="E-mail"></input>

                    <input type="password"
                    placeholder="Senha"></input>

                    
                    <button>ACESSAR</button>

                    <button onClick={MudarPagina}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Page;