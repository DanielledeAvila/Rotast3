import styled from 'styled-components';


export const Nav = styled.nav`

`;

export const Lista = styled.ul`
width: 100%;
display: flex;
justify-content: space-around;
list-style: none;
height: 20vh;
align-items: center;
@media (min-width: 320px) and (max-width: 768px){
    display: flex; 
    flex-direction: column;
    height: 40vh;
    border: solid red;
}


a{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;

}

`

//Estilização Inicio

export const Perfil = styled.img`
    width: 20vw;
    height: 40vh;
    border-radius: 50%;
    
`

export const ContainerInicio = styled.main`
display: flex;
justify-content:space-evenly;
align-items: center;
padding-top: 3rem;


@media (min-width: 320px) and (max-width: 768px){
  display: flex;
  flex-direction: column;

  img{
    width: 50vw;
  }
}
`

//------------ teste na navegação

export const Header = styled.header`

`;

//Estilização Sobre
export const MainSobre = styled.main`
display: flex;
justify-content: space-evenly;
align-items:center;
`

export const SectionDoSobre = styled.section`
height: 70vh;
width: 30vw;
margin-top: 3rem;
border: solid red 5px;
border-radius: 50px;
h2{
    text-align: center;
}
`

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 50vh;
`

export const DivCard = styled.div` 
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 20vh; 
h2{
    color: tomato;
}

h3{
    color: violet;
}

`

export const DivCard2 = styled.div`
width: 70%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;
div{
    display: flex;
    align-items: center;
}
`
