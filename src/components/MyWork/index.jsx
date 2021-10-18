import { StyledDiv, StyledButton, Container } from "./styles";
import suculenta from "../../assets/suculenta.jpg"
import flor from "../../assets/flor.jpg"
import bonsai from "../../assets/bonsai.jpg"



export function MyWork() {
    return( 
        <StyledDiv id="portfolio">
            <section>
                <span>Projetos</span>
            </section>
            <p>
                <h1>Meus projetos<span>.</span></h1>
            </p>
            
            <Container>
                <img src={flor} alt="planta flor" />
                <img src={suculenta} alt="planta suculenta" />
                <img src={bonsai} alt="planta bonsai" />
                <img src={bonsai} alt="planta bonsai" />
                <img src={suculenta} alt="planta suculenta" />
                <img src={flor} alt="planta flor" />
            </Container>


            <StyledButton>Todos os Projetos</StyledButton>
            
        </StyledDiv>
        
    )
}