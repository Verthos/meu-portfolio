import { StyledDiv } from "./styles";
import bispo from "../../assets/chess/bispo.png"
import dama from "../../assets/chess/dama.png"
import cavalo from "../../assets/chess/cavalo.png"
import {texts} from "../../data/data.json"



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
                    {texts.quemsou}

                </p>

            </div>
                    
        </StyledDiv>
        
    )
}