import { StyledDiv } from "./styles";
import {texts} from "../../data/data.json"
import { useLanguage } from "../../hooks/useLanguage"


export function WhoAmI() {
    
    const lang = useLanguage();

    if(lang.language === "en"){
        return( 
            <StyledDiv id="sobre">
                
                <section>
                    <span>Who am i</span>
                </section>
    
                <div>
                        <h1>Who am i<span>?</span></h1>
                        <p>{texts.whoAmI}</p>
                </div>
                        
            </StyledDiv>
            
        )
    }else{
        return( 
            <StyledDiv id="sobre">
                
                <section>
                    <span>Quem sou</span>
                </section>
    
                <div>
                        <h1>Quem sou eu<span>?</span></h1>
                        <p>{texts.quemsou}</p>
                </div>
                        
            </StyledDiv>
            
        )
    }
}