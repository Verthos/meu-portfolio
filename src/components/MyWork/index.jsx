import { useState, useEffect } from "react";
import { StyledDiv, StyledButton, Container } from "./styles";
import github_explorer from "../../assets/github-explorer.png";
import meuportfolio from "../../assets/meuportfolio.png";
import timeControl from "../../assets/time-control.JPG";


export function MyWork() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



  return (
      <StyledDiv id="portfolio">

        <section style={{ transform: `translateX(${offsetY * 0.3}px)` }}>
          <span>Projetos</span>
        </section>
        <h1>
          Meus projetos<span>.</span>
        </h1>

        <Container>
          <div className="projeto">
            <p>Meu portfolio</p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Verthos/meu-portfolio"
            >
              <img src={meuportfolio} alt="portfolio" />
            </a>
          </div>

          <div className="projeto">
            <p>Github explorer</p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Verthos/my-github-explorer"
            >
              <img src={github_explorer} alt="github explorer" />
            </a>

          </div>
          <div className="projeto">
            <p>Ignews - Curso Ignite</p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://fem-timecontrol.netlify.app/"
            >
              <img src={timeControl} alt="ignews" />
            </a>
          </div>

        </Container>

        <a
          rel="noreferrer"
          href="https://github.com/Verthos?tab=repositories"
          target="_blank"
        >
          <StyledButton>Todos os Projetos</StyledButton>
        </a>


      </StyledDiv>
  );
}
