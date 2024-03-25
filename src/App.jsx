import React from "react";
import {createGlobalStyle} from "styled-components"
import Navegacao from "./Components/Navegacao"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Navegacao/>
   </>
  )
}


export default App