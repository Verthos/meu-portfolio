import { StyledDiv, StyledButton } from "./styles";
import { Link } from "react-scroll";
import { useLanguage } from "../../hooks/useLanguage";
import JSLogo from "../../assets/jslogo.png"
import cssLogo from "../../assets/css3.png"
import nextLogo from "../../assets/next.png"
import reactLogo from "../../assets/react.png"
import reduxLogo from "../../assets/redux.png"





export function Home() {

    const lang = useLanguage();

    if(lang.language === "en"){
        

        return( 
            <StyledDiv id="home">

            <div className="tecnologies">
                <img src={JSLogo} alt="js-logo"/>
                <img src={cssLogo} alt="css-logo"/>
                <img className="reactIcon" src={reactLogo} alt="react-logo"/>
                <img className="nextIcon" src={nextLogo} alt="next-logo" />
                <img src={reduxLogo} alt="redux-logo"/>
            </div>
            

                <div>
                    <h2>William Peterson Kszan<span>.</span></h2>
                    <h1>Front-End <br /> Developer<span>!</span></h1>
    
                    <Link to="contato" smooth={true} duration={1000}><StyledButton>Get in touch</StyledButton></Link>
                </div>        
            </StyledDiv>
        )
    }else{
        return( 
            <StyledDiv id="home">
            
            <div className="tecnologies">
                <img src={JSLogo} alt="js-logo"/>
                <img src={cssLogo} alt="css-logo"/>
                <img className="reactIcon" src={reactLogo} alt="react-logo"/>
                <img className="nextIcon" src={nextLogo} alt="next-logo" />
                <img src={reduxLogo} alt="redux-logo"/>
            </div>


                <div>
                    <h2>William Peterson Kszan<span>.</span></h2>
                    <h1>Front-End<br /> Developer<span>!</span></h1>
    
                    <Link to="contato" smooth={true} duration={1000}><StyledButton>Entre em contato</StyledButton></Link>
                </div>
                        
            </StyledDiv>
            
        )
    } 
}