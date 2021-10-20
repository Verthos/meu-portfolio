import {  NavLinks, StyledHeader } from "./styles"
import { Link } from "react-scroll";


export function Header() {
    
    //const [openMenu] = useState("isClosed")
    

    //const handleIsOpen = function(){
        //if(openMenu !== "isOpen"){
          //  setOpenMenu("isOpen")
        //}else{
        //    setOpenMenu("isClosed")
      //  }
    //}



    return(

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
              
            <nav className="menu">
                <NavLinks>
                    <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to="sobre" smooth={true} duration={1000}>Sobre</Link></li>
                    <li><Link to="oqfaco" smooth={true} duration={1000}>Skills</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                    <li><Link to="contato" smooth={true} duration={1000}>Contato</Link></li>
                </NavLinks>  
            </nav>

        </StyledHeader>
    )
}