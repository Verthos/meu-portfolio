import { StyledDiv } from "./styles";
import bispo from "../../assets/chess/bispo.png"
import dama from "../../assets/chess/dama.png"
import cavalo from "../../assets/chess/cavalo.png"

export function MyWork() {
    return( 
        <StyledDiv>
            <img className="bispo" src={bispo} alt="bispo" />
            <img className="dama" src={dama} alt="dama" />
            <img className="cavalo" src={cavalo} alt="dama" />


            <div>

                <p>
                    <h1>Quem sou eu<span>?</span></h1>
                    Sou um apaixonado por Xadrêz, cafés e Tecnologia. Venho estudando <br />
                    Front<span><b>-</b></span>end e ferramentas relacionadas diariamente para
                    ingressar no mercado de trabalho como desenvolvedor. <br />
                    Sei que ainda há um mar de conhecimento para estudar, 
                    mas sabendo o quão comprometido e esforçado sou, posso garantir que atenderei às espectativas 
                    dos que acreditarem no meu trabalho. <br />

                </p>

            </div>
                    
        </StyledDiv>
        
    )
}