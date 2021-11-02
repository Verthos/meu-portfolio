import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Hamburger, NavLinks, StyledHeader } from "./styles"
import { Link } from "react-scroll";


export function Header() {
    
    const [meuIsOpen, setMenuIsOpen] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        controls.start(i => ({
            y: 0 ,
            transition: {delay: i * 0.1, ease: "easeOut"},
        }))
      }, [controls])

    

    return(

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
              
            <nav className="menu">
                <NavLinks className={meuIsOpen? "isOpen" : "isClosed"}>
                    <motion.li initial={{y:-60}} custom={0} animate={controls} ><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="home" smooth={true} duration={1000} className="hoverButton">Home</Link></motion.li>
                    <motion.li initial={{y:-60}} custom={1} animate={controls} ><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="sobre" smooth={true} duration={1000} className="hoverButton">Sobre</Link></motion.li>
                    <motion.li initial={{y:-60}} custom={2} animate={controls} ><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="oqfaco" smooth={true} duration={1000} className="hoverButton">Skills</Link></motion.li>
                    <motion.li initial={{y:-60}} custom={3} animate={controls} ><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="portfolio" smooth={true} duration={1000} className="hoverButton">Portfolio</Link></motion.li>
                    <motion.li initial={{y:-60}} custom={4} animate={controls} ><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="contato" smooth={true} duration={1000} className="hoverButton">Contato</Link></motion.li>
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



/* componente para troca de linguagem:
            <div className="lingua">
                <img onClick={() => lang.handleNewLanguage("ptbr")} src={ptbr} alt="bandeira BR" className={lang.ptbr ? "active" : "false"}/>
                <img onClick={() => lang.handleNewLanguage("en")} src={en} alt="bandeira UK" className={lang.en ? "active" : "false"}/>
            </div>

*/