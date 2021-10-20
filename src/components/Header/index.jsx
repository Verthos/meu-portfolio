import { Hamburger, StyledHeader, NavLinks } from "./styles"
import { Link } from "react-scroll"
//import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react/cjs/react.development";


export function Header() {
    
    const [openMenu, setOpenMenu] = useState("isClosed")
    

    const handleIsOpen = function(arg){
        if(openMenu !== arg){
            setOpenMenu("isOpen")
        }else{
            setOpenMenu("isClosed")
        }
        console.log(openMenu)
    }


    //const lang = useLanguage();

    return(
        <StyledHeader>
            <Hamburger onClick={() => handleIsOpen("isOpen")}>
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