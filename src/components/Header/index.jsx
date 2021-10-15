import { StyledHeader } from "./styles"
import img from "../../assets/me.jpg"
export function Header() {
    return(
        <StyledHeader>
            
            
            <img src={img} alt="" />
            <nav>
                <p>William Peterson Kszan</p>
                <h1>Front-End Dev</h1>
                
            </nav>
            
            
            
        </StyledHeader>
    )
}