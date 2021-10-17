import { StyledHeader } from "./styles"
import { Link } from "react-scroll";


export function Header() {
    return(


        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
            
            <nav>
                <Link to="home" smooth={true} duration={1000}>Home</Link>
                <Link to="sobre" smooth={true} duration={1000}>Sobre mim</Link>
                <Link to="work" smooth={true} duration={1000}>O que eu faço</Link>
                <Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                <Link to="contato" smooth={true} duration={1000}>Contato</Link>
            </nav>
        </StyledHeader>
    )
}