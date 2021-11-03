import { useEffect, useState } from "react";
import { StyledDiv, Container } from "./styles";
import dataJson from "../../data/data.json";

export function Skills() {

  const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return() => window.removeEventListener("scroll", handleScroll)
    },[])



  return (
    <StyledDiv id="oqfaco">

      <section>
        <span style={{transform: `translateX(${offsetY * -0.3}px)`}}>HABILIDADES</span>
      </section>

      <h2>Minhas</h2>
      <h1>
        Habilidades<span>.</span>
      </h1>

      <Container>
        <ul>
          <p>
            Linguagens<span>.</span>
          </p>
          {dataJson.skills.linguagens.map((linguagem) => {return <li>{linguagem}</li>;})}
        </ul>
        <ul>
          <p>
            Frameworks<span>.</span>
          </p>
          {dataJson.skills.frameworks.map((linguagem) => {
            return <li>{linguagem}</li>;
          })}
        </ul>
        <ul>
          <p>
            Ferramentas diversas<span>.</span>
          </p>

          {dataJson.skills.ferramentas.map((linguagem) => {
            return <li>{linguagem}</li>;
          })}
        </ul>

        <ul>
          <p>
            Softskills<span>.</span>
          </p>
          {dataJson.skills.pt_softskills.map((linguagem) => {
            return <li>{linguagem}</li>;
          })}
        </ul>
      </Container>
    </StyledDiv>
  );
}
