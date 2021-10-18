import { StyledDiv, StyledButton } from "./styles";
import { Link } from "react-scroll";

export function Home() {
    return( 
        <StyledDiv id="home">

            <div>
                <p>
                    <h2>William Peterson Kszan<span>.</span></h2>
                </p>

                <p>
                    <h1>Front-End <br /> Developer<span>!</span></h1>
                </p>

                <StyledButton><Link to="contato" smooth={true} duration={1000}>Entre em contato</Link></StyledButton>
            </div>
                    
        </StyledDiv>
        
    )
}