import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Galeria from "./Galeria.jsx"
import * as S from "./Style.jsx"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function Navegacao() {
    return (
        <S.Header>
            <BrowserRouter>
                <S.Nav>
                    <S.Lista>
                        {/* to = para, um link para o sobre, projetos, início, galeria " / " */}
                        <li> <Link to="/"> Início </Link>  </li>
                        <li> <Link to="/Sobre"> Sobre </Link> </li>
                        <li> <Link to="/Projetos"> Projetos </Link></li>
                        <li> <Link to="/Galeria"> Galeria </Link></li>
                    </S.Lista>
                </S.Nav>


                <Routes>
                    {/* path(caminho): configuração dos dois, Link to="/Sobre" path="Sobre" */}
                    {/* element: configura para qual componente que quero ir. elemento={ativar o componente  <Sobre /> } */}
                    <Route path="/" element={<Inicio />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Projetos" element={<Projetos />} />
                    <Route path="Galeria" element={<Galeria />} />

                </Routes>

            </BrowserRouter>

        </S.Header>

    )
}

export default Navegacao