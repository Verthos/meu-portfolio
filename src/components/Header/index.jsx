import { Hamburger, StyledHeader } from "./styles"
import { Link } from "react-scroll"
//import { useLanguage } from "../../hooks/useLanguage";
//import { useState } from "react/cjs/react.development";


export function Header() {
    
    //const [openMenu, setOpenMenu] = useState("isClosed")
    

    //const handleIsOpen = function(){
        //if(openMenu !== "isOpen"){
            //setOpenMenu("isOpen")
        //}else{
            //setOpenMenu("isClosed")
        //}
    //}


    //const lang = useLanguage();

    return(
        <StyledHeader>
            <Hamburger>
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