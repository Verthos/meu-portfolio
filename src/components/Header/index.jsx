import { Hamburger, StyledHeader } from "./styles"
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
        </StyledHeader>

    )

    
}