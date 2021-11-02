import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { StyledDiv, StyledButton } from "./styles";
import { Link } from "react-scroll";
import JSLogo from "../../assets/jslogo.png";
import cssLogo from "../../assets/css3.png";
import nextLogo from "../../assets/next.png";
import reactLogo from "../../assets/react.png";
import reduxLogo from "../../assets/redux.png";




export function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return() => window.removeEventListener("scroll", handleScroll)
    },[])

    const controls = useAnimation()


    //animações icones tecnologias
    useEffect(() => {
        controls.start(i => ({
            y: 0 ,
            transition: {delay: i * 0.1, ease: "easeOut"},
        }))
      }, [controls])




        return( 
            <StyledDiv id="home">
            
            <div style={{transform: `translateY(${offsetY * 0.4}px)`}} className="tecnologies">
                <motion.img initial={{y:-450}} custom={5} animate={controls} src={JSLogo} alt="js-logo"/>
                <motion.img initial={{y:-450}} custom={6} animate={controls} src={cssLogo} alt="css-logo"/>
                <motion.img initial={{y:-450}} custom={7} animate={controls} className="reactIcon" src={reactLogo} alt="react-logo"/>
                <motion.img initial={{y:-450}} custom={8} animate={controls} className="nextIcon" src={nextLogo} alt="next-logo" />
                <motion.img initial={{y:-450}} custom={9} animate={controls} src={reduxLogo} alt="redux-logo"/>
            </div>

                <div>
                    <h2>William Peterson Kszan<span>.</span></h2>
                    <h1>Front-End<br /> Developer<span>!</span></h1>
    
                    <Link to="contato" smooth={true} duration={1000}><StyledButton>Entre em contato</StyledButton></Link>
                </div>
                        
            </StyledDiv>
            
        )
}