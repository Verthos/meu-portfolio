import { useState, useEffect } from "react";
import { StyledDiv, StyledButton, Container } from "./styles";
import ignews from "../../assets/ignews.png"
import github_explorer from "../../assets/github-explorer.png"
import meuportfolio from "../../assets/meuportfolio.png"


export function MyWork() {

        const [offsetY, setOffsetY] = useState(0);
        const handleScroll = () => setOffsetY(window.pageYOffset)
        useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return() => window.removeEventListener("scroll", handleScroll)
        },[])

       
        return(
            <StyledDiv id="portfolio">
                <section style={{transform: `translateX(${offsetY * 0.3}px)`}}>
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