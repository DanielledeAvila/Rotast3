import React from "react";
import Perfil from "./ImagensPortifolio/perfil.jpeg";
import * as S from "./Style.jsx"

function Inicio(){

  return(
  <S.ContainerInicio>
  <S.Perfil src={Perfil} alt="Minha foto" />
    <div>
      <h2>Olá, eu sou o Caramelo, </h2>
      <h2>venham navegar pelo o meu portólio.</h2>
    </div>
  </S.ContainerInicio>
  )
}

export default Inicio