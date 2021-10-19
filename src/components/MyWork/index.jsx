import { StyledDiv, StyledButton, Container } from "./styles";
import { useLanguage } from "../../hooks/useLanguage"
import ignews from "../../assets/ignews.png"
import github_explorer from "../../assets/github-explorer.png"
import meuportfolio from "../../assets/meuportfolio.png"

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
                    <img src={meuportfolio} alt="planta flor" />
                    <img src={github_explorer} alt="planta suculenta" />
                    <img src={ignews} alt="planta bonsai" />
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
                    <div>
                        <p>Meu portfolio</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/meu-portfolio"><img src={meuportfolio} alt="portfolio" /></a>
                        <ul>
                            <p>Principais técnologias</p>
                            <li>React JS</li>
                            <li>Styled-components</li>

                            
                        </ul>
                    </div>
                    
                    <div>
                        <p>Github explorer</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/my-github-explorer"><img src={github_explorer} alt="github explorer" /></a>
                        <ul>
                            <p>Principais técnologias</p>
                            <li>React JS</li>
                            <li>Typescript</li>
                            <li>Styled-components</li>
                            <li>Github API</li>
                            
                        </ul>
                    </div>
                    <div>
                        <p>Ignews - Ignite</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/my-github-explorer"><img src={ignews} alt="ignews" /></a>
                        <ul>
                            <p>Principais técnologias</p>
                            <li>React JS</li>
                            <li>Styled-components</li>
                            <li>Next JS</li>
                            <li>Github Oauth</li>
                            
                        </ul>
                        
                    </div>
                </Container>
    
    
                <a rel="noreferrer" href="https://github.com/Verthos?tab=repositories" target="_blank" ><StyledButton >Todos os Projetos</StyledButton></a>
                
            </StyledDiv>
        )
    }

}