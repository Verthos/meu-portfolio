import { Hamburger, StyledHeader, NavLinks } from "./styles"
import { Link } from "react-scroll"
//import { useLanguage } from "../../hooks/useLanguage";
import en from "../../assets/en.jpg"
import ptbr from "../../assets/pt-br.jpg"


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

            <img src={en} alt="bandeira reino unido" />
            <img src={ptbr} alt="bandeira brasil" />
        </StyledHeader>

    )

    
}