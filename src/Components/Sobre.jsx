import React from "react"
import * as S from "./Style.jsx"
import Vnw from "./ImagensPortifolio/vnw.png"
import Css from "./ImagensPortifolio/css.png"
import Js from "./ImagensPortifolio/js.png"
import Html from "./ImagensPortifolio/html.png"
import Mic from "./ImagensPortifolio/mic.png"

function Sobre() {
    return (
        <S.MainSobre>

            <S.SectionDoSobre>
                <h2>ESTUDOS</h2>
                <S.Card>
                    <S.DivCard>
                        <h2>Desenvolvimento front-end</h2>
                        <h3>AGO/2023 - MAIO/2024</h3>
                        <img src={Vnw} alt="Logo do vnw" />
                    </S.DivCard>

                </S.Card>

            </S.SectionDoSobre>

            <S.SectionDoSobre>
                <h2>HABILIDADES</h2>
                <S.Card>
                    <S.DivCard2>
                        <div>
                          <h3>CSS</h3>
                        <img src={Css} alt="logo css" />  
                        </div>
                        
                        <div>
                          <h3>Js</h3>
                        <img src={Js} alt="logo javascript" />  
                        </div>

                        <div>
                             <h3>HTML</h3>
                        <img src={Html} alt="logo html5" />
                        </div>
                        
                       

                    </S.DivCard2>
                </S.Card>

            </S.SectionDoSobre>

            <S.SectionDoSobre>
                <h2>PROFISSIONAL</h2>
                <S.Card>
                    <S.DivCard>
                        <h2> cantora, compositora, produtora musical e atriz</h2>
                        <img src={Mic} alt="Logo do microfone" />
                    </S.DivCard>

                </S.Card>

            </S.SectionDoSobre>

        </S.MainSobre>

    )
}

export default Sobre