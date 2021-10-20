import { useState } from "react";
import { Hamburger, NavLinks, StyledHeader } from "./styles"
import { Link } from "react-scroll";


export function Header() {
    
    const [meuIsOpen, setMenuIsOpen] = useState(false)
    

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

        </StyledHeader>
    )
}