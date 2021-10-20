import { Hamburger, StyledHeader, NavLinks } from "./styles"
import { Link } from "react-scroll"
import { useLanguage } from "../../hooks/useLanguage";
import en from "../../assets/en.jpg"
import ptbr from "../../assets/pt-br.jpg"


export function Header() {

    const lang = useLanguage();

    return(
        <header>
            <Hamburger >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </Hamburger>
            <ul>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
                <Link to="contato" smooth={true} duration={1000}>Entre em contato</Link>
            </ul>
            
            <button onClick={lang.handleNewLanguage("ptbr")}><img src={ptbr} alt="bandeira brasil"/></button>
            <button onClick={lang.handleNewLanguage("en")}><img src={en} alt="bandeira reino unido"/></button>
        </header>

    )

    
}