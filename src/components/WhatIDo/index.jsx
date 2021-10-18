import { StyledDiv, Container } from "./styles";
import dataJson from "../../data/data.json"


export function Skills() {

    return( 
        <StyledDiv id="oqfaco">

            <section>
                <span>HABILIDADES</span>
            </section>
            <p>
                <h2>Minhas</h2>
                <h1>Habilidades<span>.</span></h1>              
            </p>


            <Container>

                <ul>
                    <h1>Linguagens<span>.</span></h1>
                    {dataJson.skills.linguagens.map((linguagem) => {return(
                        <li>{linguagem}</li>
                    )})}
                </ul>

                <ul>
                    <h1>Frameworks<span>.</span></h1>
                    {dataJson.skills.frameworks.map((linguagem) => {return(
                        <li>{linguagem}</li>
                    )})}
                </ul>

                <ul>
                    <h1>Ferramentas diversas<span>.</span></h1>

                    {dataJson.skills.ferramentas.map((linguagem) => {return(
                        <li>{linguagem}</li>
                    )})}

                </ul>

                <ul>
                    <h1>Softskills<span>.</span></h1>
                    {dataJson.skills.softskills.map((linguagem) => {return(
                        <li>{linguagem}</li>
                    )})}
                </ul>


            </Container>

        </StyledDiv>       
    )
}