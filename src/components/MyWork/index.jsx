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
                <h1>Meus projetos<span>.</span></h1>
            
            <Container>
                <img src={flor} alt="planta flor" />
                <img src={suculenta} alt="planta suculenta" />
                <img src={bonsai} alt="planta bonsai" />

            </Container>


            <StyledButton ><a rel="noreferrer" href="https://github.com/Verthos?tab=repositories" target="_blank" >Todos os Projetos</a></StyledButton>
            
        </StyledDiv>
        
    )
}