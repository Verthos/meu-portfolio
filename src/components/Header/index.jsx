import { Hamburger, NavLinks, StyledHeader } from "./styles"
import { Link } from "react-scroll";

import { useState } from "react/cjs/react.development";


export function Header() {
    
    const [openMenu, setOpenMenu] = useState("isClosed")
    

    const handleIsOpen = function(){
        if(openMenu !== "isOpen"){
            setOpenMenu("isOpen")
        }else{
            setOpenMenu("isClosed")
        }
    }



    return(
        

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
            
            <nav className="menu">
                <Hamburger onClick={() => handleIsOpen()}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </Hamburger>
                <NavLinks className={openMenu}>
                    <li><Link onClick={() => handleIsOpen()} to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link onClick={() => handleIsOpen()} to="sobre" smooth={true} duration={1000}>Sobre</Link></li>
                    <li><Link onClick={() => handleIsOpen()} to="oqfaco" smooth={true} duration={1000}>Skills</Link></li>
                    <li><Link onClick={() => handleIsOpen()} to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                    <li><Link onClick={() => handleIsOpen()} to="contato" smooth={true} duration={1000}>Contato</Link></li>
                </NavLinks>  
            </nav>

        
            

        </StyledHeader>
    )

    
}