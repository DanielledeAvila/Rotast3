import React from "react";
import Inicio from "./Inicio"
import Sobre from "./Sobre"
import Projetos from "./Projetos"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function Navegacao(){
  return(
    <BrowserRouter> 
    
        <nav>
            <ul>
                <li> <Link to="/">Inicio</Link> </li>
                <li> <Link to="/Sobre">Sobre</Link> </li>
                <li> <Link to="/Projetos">Projetos</Link> </li>
            </ul>
        </nav>


        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="Sobre" element={<Sobre/>} />
            <Route path="Projetos" element={<Projetos/>} />
        </Routes>

    </BrowserRouter>
  )
}

export default Navegacao

