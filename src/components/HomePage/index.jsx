import { StyledDiv, StyledButton } from "./styles";
import { Link } from "react-scroll";
import bispo from "../../assets/chess/bispo.png"
import dama from "../../assets/chess/dama.png"
import cavalo from "../../assets/chess/cavalo.png"

export function Home() {
    return( 
        <StyledDiv id="home">


            <img className="bispo" src={bispo} alt="bispo" />
            <img className="cavalo" src={cavalo} alt="dama" />
            <img className="dama" src={dama} alt="dama" />

            <div>
                <h2>William Peterson Kszan<span>.</span></h2>
                <h1>Front-End <br /> Developer<span>!</span></h1>

                <StyledButton><Link to="contato" smooth={true} duration={1000}>Entre em contato</Link></StyledButton>
            </div>
                    
        </StyledDiv>
        
    )
}