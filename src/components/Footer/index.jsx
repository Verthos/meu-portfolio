import { StyledFooter, SocialDiv } from "./styles";
import img from "../../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return( 
        <StyledFooter>

            <h1>Vamos trabalhar juntos<span>?</span></h1>

            <img src={img} alt="avatar" />


            <p>If you have a website or mobile app idea in mind or
                you need some advice about <br /> product design, feel free to contact me.
                Currently my time books quickly, so the sooner <br /> you write, 
                the better it is for both of us.
            </p>
            <SocialDiv>
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