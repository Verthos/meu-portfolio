import { StyledDiv, StyledButton, Container } from "./styles";
import suculenta from "../../assets/suculenta.jpg"
import flor from "../../assets/flor.jpg"
import bonsai from "../../assets/bonsai.jpg"



export function MyWork() {
    return( 
        <StyledDiv>
            <section>
                <span>Projetos</span>
            </section>
            <p>
                <h2>Meus</h2>
                <h1>Projetos<span>.</span></h1>
            </p>
            

            <p></p>

            <Container>
                <img src={flor} alt="planta flor" />
                <img src={suculenta} alt="planta suculenta" />
                <img src={bonsai} alt="planta bonsai" />
            </Container>


            <StyledButton>Todos os Projetos</StyledButton>
            
        </StyledDiv>
        
    )
}