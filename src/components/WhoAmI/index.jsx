import { StyledDiv } from "./styles";
import bispo from "../../assets/chess/bispo.png"
import dama from "../../assets/chess/dama.png"
import cavalo from "../../assets/chess/cavalo.png"

export function WhoAmI() {
    return( 
        <StyledDiv id="sobre">
            <img className="bispo" src={bispo} alt="bispo" />
            <img className="cavalo" src={cavalo} alt="dama" />
            <img className="dama" src={dama} alt="dama" />

            <section>
                <span>Quem sou</span>
            </section>

            <div>
                <p>
                    <h1>Quem sou eu<span>?</span></h1>
                    Meu nome é William, tenho 28 anos e sou um apaixonado por Xadrêz, cafés e Tecnologia. Venho estudando diariamente
                    <b> Front<span>-</span>end</b> e ferramentas relacionadas  para
                    ingressar no mercado de trabalho como desenvolvedor. <br />
                    Sei que ainda há um mar de conhecimento para estudar, 
                    mas sabendo o quão comprometido e esforçado sou, posso garantir que atenderei às espectativas 
                    dos que acreditarem no meu trabalho. <br />

                </p>

            </div>
                    
        </StyledDiv>
        
    )
}