import { StyledDiv } from "./styles";
import {texts} from "../../data/data.json"



export function WhoAmI() {
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