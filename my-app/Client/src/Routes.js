import './App.css';
import React from 'react';
import { Route, Routes } from "react-router";

import Login from "./paginas/Login/index.js"
import Register from "./paginas/Register/index.js"

import Logo from './img/desgraca.svg';
import Axios from "axios";

function Liga() {

    return(

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>

    );
}

export default Liga;