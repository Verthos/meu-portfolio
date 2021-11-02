import { StyledDiv, StyledButton, Container } from "./styles";
import { useLanguage } from "../../hooks/useLanguage"
import ignews from "../../assets/ignews.png"
import github_explorer from "../../assets/github-explorer.png"
import meuportfolio from "../../assets/meuportfolio.png"
import worldtravel from "../../assets/worldtravel.png"


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
                <div>

                        
                    <div className="worldTravel">
                        <p>World travel, blog</p>
                            <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/world_travel"><img src={worldtravel} alt="worldtravel" /></a>
                            <ul>
                                <p>Tecnlogies</p>
                                <li>Next JS</li>
                                <li>Prismic CMS</li>
                                <li>APIs rest</li>
                                <li>SSR e SSG</li>
                                <li>SCSS</li>
                                
                            </ul>


                    </div>
                        


                        <p>Meu portfolio</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/meu-portfolio"><img src={meuportfolio} alt="portfolio" /></a>
                        <ul>
                            <p>Tecnlogies</p>
                            <li>React JS</li>
                            <li>Styled-components</li>

                            
                        </ul>
                    </div>
                    
                    <div>
                        <p>Github explorer</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/my-github-explorer"><img src={github_explorer} alt="github explorer" /></a>
                        <ul>
                            <p>Tecnlogies</p>
                            <li>React JS</li>
                            <li>Typescript</li>
                            <li>Styled-components</li>
                            <li>Github API</li>
                            
                        </ul>
                    </div>
                    <div>
                        <p>Ignews - Curso Ignite</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/my-github-explorer"><img src={ignews} alt="ignews" /></a>
                        <ul>
                            <p>Tecnlogies</p>
                            <li>React JS</li>
                            <li>Styled-components</li>
                            <li>Next JS</li>
                            <li>Github Oauth</li>
                            
                        </ul>
                        
                    </div>
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
                            <p>Tecnologias</p>
                            <li>React JS</li>
                            <li>Styled-components</li>

                            
                        </ul>
                    </div>
                    
                    <div>
                        <p>Github explorer</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/my-github-explorer"><img src={github_explorer} alt="github explorer" /></a>
                        <ul>
                            <p>Tecnologias</p>
                            <li>React JS</li>
                            <li>Typescript</li>
                            <li>Styled-components</li>
                            <li>Github API</li>
                            
                        </ul>
                    </div>
                    <div>
                        <p>Ignews - Curso Ignite</p>
                        <a rel="noreferrer" target="_blank" href="https://github.com/Verthos/my-github-explorer"><img src={ignews} alt="ignews" /></a>
                        <ul>
                            <p>Tecnologias</p>
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