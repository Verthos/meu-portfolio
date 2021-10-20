import { Hamburger, NavLinks, StyledHeader } from "./styles"
import { Link } from "react-scroll";
import ptbr from "../../assets/pt-br.jpg"
import en from "../../assets/en.jpg"
import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react/cjs/react.development";


export function Header() {
    
    const [openMenu] = useState("isClosed")
    



    const lang = useLanguage();

    return(
        

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
            
            <nav className="menu">
                <Hamburger>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </Hamburger>
                <NavLinks className={openMenu}>
                    <li><Link  to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link  to="sobre" smooth={true} duration={1000}>Sobre</Link></li>
                    <li><Link  to="oqfaco" smooth={true} duration={1000}>Skills</Link></li>
                    <li><Link  to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                    <li><Link  to="contato" smooth={true} duration={1000}>Contato</Link></li>
                </NavLinks>  
            </nav>

        
            <nav className="lingua">
                <div className={lang.ptbr}>
                    <img src={ptbr} alt="bandeira-brasil"/>
                </div>
                <div className={lang.en}>
                    <img src={en} alt="bandeira-ingraterra"/>
                </div>
                
            </nav>

        </StyledHeader>
    )

    
}