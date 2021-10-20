import { StyledHeader } from "./styles"
import ptbr from "../../assets/pt-br.jpg"
import en from "../../assets/en.jpg"
import { useLanguage } from "../../hooks/useLanguage";
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


    const lang = useLanguage();

    return(
        

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
            /
            <nav className="menu">
                
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