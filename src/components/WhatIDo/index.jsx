import { StyledDiv, Container } from "./styles";
import dataJson from "../../data/data.json"
import { useLanguage } from "../../hooks/useLanguage";

export function Skills() {

    const lang = useLanguage();

    if(lang.language === "en"){
        return( 
            <StyledDiv id="oqfaco">
    
                <section>
                    <span>Skills</span>
                </section>
                
                    <h2>My</h2>
                    <h1>Skills<span>.</span></h1>              
    
                <Container>
    
                    <ul>
                        <p>Languages<span>.</span></p>
                        {dataJson.skills.linguagens.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
                    </ul>
                    <ul>
                        <p>Frameworks<span>.</span></p>
                        {dataJson.skills.frameworks.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
                    </ul>
                    <ul>
                        <p>Tools<span>.</span></p>
    
                        {dataJson.skills.ferramentas.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
    
                    </ul>
                    <ul>
                        <p>Softskills<span>.</span></p>
                        {dataJson.skills.en_softskills.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
                    </ul>
    
    
                </Container>
    
            </StyledDiv>       
        )
    }else{
        return( 
            <StyledDiv id="oqfaco">
    
                <section>
                    <span>HABILIDADES</span>
                </section>
                
                    <h2>Minhas</h2>
                    <h1>Habilidades<span>.</span></h1>              
    
    
    
                <Container>
    
                    <ul>
                        <p>Linguagens<span>.</span></p>
                        {dataJson.skills.linguagens.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
                    </ul>
    
                    <ul>
                        <p>Frameworks<span>.</span></p>
                        {dataJson.skills.frameworks.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
                    </ul>
    
                    <ul>
                        <p>Ferramentas diversas<span>.</span></p>
    
                        {dataJson.skills.ferramentas.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
    
                    </ul>
    
                    <ul>
                        <p>Softskills<span>.</span></p>
                        {dataJson.skills.pt_softskills.map((linguagem) => {return(
                            <li>{linguagem}</li>
                        )})}
                    </ul>
    
    
                </Container>
    
            </StyledDiv>       
        )
    }

    
}