import { StyledDiv, StyledButton, Container } from "./styles";
import suculenta from "../../assets/suculenta.jpg"
import flor from "../../assets/flor.jpg"
import bonsai from "../../assets/bonsai.jpg"



export function MyBlog() {
    return( 
        <StyledDiv>
            <section>
                <span>BLOG</span>
            </section>
            <p>
                <h2>My Blog</h2>
                <h1>Blog<span>.</span></h1>
                See the latest articles that's talking about design and development.
            </p>
            

            <p></p>

            <Container>
                <img src={flor} alt="planta flor" />
                <img src={suculenta} alt="planta suculenta" />
                <img src={bonsai} alt="planta bonsai" />
            </Container>


            <StyledButton>Read all articles →</StyledButton>
            
        </StyledDiv>
        
    )
}