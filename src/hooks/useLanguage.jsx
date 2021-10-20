import { createContext, useState, useContext} from "react";



const LanguageContext = createContext({});

export function LanguageProvider({children}) {
    
    const [ptbr, setPtbr] = useState(true)
    const [en, setEn] = useState(false)
    const [language, setLanguage] = useState("ptbr");

    function handleNewLanguage(argument){
        if (language !== argument) {
            setLanguage(argument);

            if(argument === "ptbr"){
                setPtbr(true);
                setEn(false);
            }else{
                setEn(true);
                setPtbr(false);
            }

        }else{
            return;    
        }
        
    }


    return(
        
        <LanguageContext.Provider value={{handleNewLanguage, setLanguage, language, ptbr, en}}>
            {children}
        </LanguageContext.Provider>
    )


}

export function useLanguage() {
    const context = useContext(LanguageContext)
    return context
}