import { StyledFooter, SocialDiv } from "./styles";
import img from "../../assets/me_color.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { texts } from "../../data/data.json"
import { useLanguage } from "../../hooks/useLanguage";


export function Footer() {


    const lang = useLanguage();

    if(lang.language === "en"){
        return( 
            <StyledFooter>
    
                <h1>Let's work together<span>?</span></h1>
    
                <img src={img} alt="avatar" />
    
    
                <p> {texts.english_footer}</p>
    
                <SocialDiv id="contato">
                    <a target="_blank" rel="noreferrer" className ="linkedin" href="https://www.linkedin.com/in/william-kszan-79b292105/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="github" href="https://github.com/Verthos">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="instagram" href="https://www.instagram.com/wilkszan/">
                        <FontAwesomeIcon icon={faInstagram} size="3x"/>
                    </a>
    
                </SocialDiv>
                
            </StyledFooter>
            
        )

    }else{
        return( 
            <StyledFooter>
    
                <h1>Vamos trabalhar juntos<span>?</span></h1>
    
                <img src={img} alt="avatar" />
    
    
                <p> {texts.footer}</p>
    
                <SocialDiv id="contato">
                    <a target="_blank" rel="noreferrer" className ="linkedin" href="https://www.linkedin.com/in/william-kszan-79b292105/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="github" href="https://github.com/Verthos">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="instagram" href="https://www.instagram.com/wilkszan/">
                        <FontAwesomeIcon icon={faInstagram} size="3x"/>
                    </a>
    
                </SocialDiv>
                
            </StyledFooter>
            
        )

    }
 
}