import { StyledFooter, SocialDiv } from "./styles";
import img from "../../assets/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
    return( 
        <StyledFooter>

            <h1>Vamos trabalhar juntos<span>?</span></h1>

            <img src={img} alt="avatar" />


            <p> Se gostou do meu trabalho e tem algum projeto em mente ou vaga para desenvoldedor Fron-end, 
                sinta-se à vontade para me contatar.
                Atualmente trabalho em periodo integral, mas responderei assim que possível.<br /> 
                
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