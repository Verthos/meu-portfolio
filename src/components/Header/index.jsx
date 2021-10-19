import { StyledHeader } from "./styles"
import { Link } from "react-scroll";
import ptbr from "../../assets/pt-br.jpg"
import en from "../../assets/en.jpg"
import { useLanguage } from "../../hooks/useLanguage";


export function Header() {

    const lang = useLanguage();

    return(

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
              
            <nav className="menu">
                <Link to="home" smooth={true} duration={1000}>Home</Link>
                <Link className="about" to="sobre" smooth={true} duration={1000}>About</Link>
                <Link to="oqfaco" smooth={true} duration={1000}>Skills</Link>
                <Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                <Link to="contato" smooth={true} duration={1000}>Contat</Link>
            </nav>

            <nav className="lingua">
                <div className={lang.ptbr}>
                    <img src={ptbr} alt="bandeira-brasil" onClick={() => lang.handleNewLanguage("ptbr")}/>
                </div>
                <div className={lang.en}>
                    <img src={en} alt="bandeira-ingraterra" onClick={() => lang.handleNewLanguage("en")}/>
                </div>
                
            </nav>

        </StyledHeader>
    )
}