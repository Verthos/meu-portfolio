import { StyledDiv, StyledButton, Container } from "./styles";
import suculenta from "../../assets/suculenta.jpg"
import flor from "../../assets/flor.jpg"
import bonsai from "../../assets/bonsai.jpg"
import { useLanguage } from "../../hooks/useLanguage"


export function MyWork() {

    const lang = useLanguage();

    if(lang.language === "en"){
        return(
            <StyledDiv id="portfolio">
                <section>
                    <span>Projects</span>
                </section>
                <h1>My projects<span>.</span></h1>
            
                <Container>
                    <img src={flor} alt="planta flor" />
                    <img src={suculenta} alt="planta suculenta" />
                    <img src={bonsai} alt="planta bonsai" />
                </Container>


                <a rel="noreferrer" href="https://github.com/Verthos?tab=repositories" target="_blank" ><StyledButton >All Projects</StyledButton></a>
            
            </StyledDiv>
        )
    }else{
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
    
    
                <a rel="noreferrer" href="https://github.com/Verthos?tab=repositories" target="_blank" ><StyledButton >Todos os Projetos</StyledButton></a>
                
            </StyledDiv>
        )
    }

}