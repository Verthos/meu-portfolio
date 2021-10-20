import { Hamburger, StyledHeader, NavLinks } from "./styles"
import { Link } from "react-scroll"
//import { useLanguage } from "../../hooks/useLanguage";


export function Header() {



    //const lang = useLanguage();

    return(
        <StyledHeader>
            <Hamburger >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </Hamburger>
            <NavLinks>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
            </NavLinks>
        </StyledHeader>

    )

    
}