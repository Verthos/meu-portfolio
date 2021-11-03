import { useState, useEffect } from "react";
import {StyledContainer} from "./styles.js"
import worldtravel from "../../assets/worldtravel.png"


export function FeaturedWorks(){

    const [offsetY, setOffsetY] = useState(0);
        const handleScroll = () => setOffsetY(window.pageYOffset)
        useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return() => window.removeEventListener("scroll", handleScroll)
        },[])

    return(
        <StyledContainer>

            <section>
                <div style={{transform: `translateY(${offsetY * 0.1}px)`}} className="titulo">
                    <h1>Blog Worldtravel<span>.</span> </h1>
                    <h2>Trabalho em destaque</h2>
                </div>
                <div>
                    <img src={worldtravel} alt="blog-viagens" />
                </div>
                
                       
            </section>
            

        </StyledContainer>
    )
}