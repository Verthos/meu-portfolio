import { StyledDiv, StyledButton } from "./styles";
import { Link } from "react-scroll";
import { useLanguage } from "../../hooks/useLanguage";
export function Home() {

    const lang = useLanguage();

    if(lang.language === "en"){
        return( 
            <StyledDiv id="home">
                <div>
                    <h2>William Peterson Kszan<span>.</span></h2>
                    <h1>Front-End <br /> Developer<span>!</span></h1>
    
                    <Link to="contato" smooth={true} duration={1000}><StyledButton>Entre em contato</StyledButton></Link>
                </div>        
            </StyledDiv>
        )
    }else{
        return( 
            <StyledDiv id="home">
    
                <div>
                    <h2>William Peterson Kszan<span>.</span></h2>
                    <h1>Desenvolvedor<br /> Front-End<span>!</span></h1>
    
                    <Link to="contato" smooth={true} duration={1000}><StyledButton>Entre em contato</StyledButton></Link>
                </div>
                        
            </StyledDiv>
            
        )
    } 
}