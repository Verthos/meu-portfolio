import { useEffect, useState } from "react";
import { StyledDiv } from "./styles";
import {texts} from "../../data/data.json"

export function WhoAmI() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return() => window.removeEventListener("scroll", handleScroll)
    },[])

    
    return( 

        <div>
        <StyledDiv id="sobre">
            <section>
                <span
                className="backgroundDiv"
                style={{transform: `translateX(${offsetY * 0.3}px)`}}>
                    Quem sou
                </span>
            </section>
            <div>
                <h1>Quem sou eu<span>?</span></h1>
                <p>{texts.quemsou}</p>
            </div>        
        </StyledDiv>
    
            
        </div>





        
    )
}








   