import { Hamburger, StyledHeader, NavLinks } from "./styles"
import { Link } from "react-scroll"
import { useLanguage } from "../../hooks/useLanguage";
import en from "../../assets/en.jpg"
import ptbr from "../../assets/pt-br.jpg"


export function Header() {

    const {handleNewLanguage} = useLanguage();

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
            
            <button onClick={handleNewLanguage("ptbr")}><img src={ptbr} alt="bandeira brasil"/></button>
            <button onClick={handleNewLanguage("en")}><img src={en} alt="bandeira reino unido"/></button>
        </StyledHeader>

    )

    
}