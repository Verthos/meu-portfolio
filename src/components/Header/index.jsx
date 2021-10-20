import { useState } from "react";
import { Hamburger, NavLinks, StyledHeader } from "./styles"
import { Link } from "react-scroll";
import { useLanguage } from "../../hooks/useLanguage"

import ptbr from "../../assets/pt-br.jpg"
import en from "../../assets/en.jpg"


export function Header() {
    
    const [meuIsOpen, setMenuIsOpen] = useState(false)
    const lang = useLanguage();
    

    return(

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
              
            <nav className="menu">
                <NavLinks className={meuIsOpen? "isOpen" : "isClosed"}>
                    <li><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="sobre" smooth={true} duration={1000}>Sobre</Link></li>
                    <li><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="oqfaco" smooth={true} duration={1000}>Skills</Link></li>
                    <li><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                    <li><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="contato" smooth={true} duration={1000}>Contato</Link></li>
                </NavLinks>

                <Hamburger onClick={() => setMenuIsOpen(!meuIsOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </Hamburger>
            </nav>

            <div className="lingua">
                <img onClick={() => lang.handleNewLanguage("ptbr")} src={ptbr} alt="bandeira BR" />
                <img onClick={() => lang.handleNewLanguage("en")} src={en} alt="bandeira UK" />
            </div>




        </StyledHeader>
    )
}