import { GlobalStyle } from "./styles/global";
import { Footer} from "./components/Footer"
import { MyWork } from "./components/MyWork";
import { WhoAmI } from "./components/WhoAmI";
import { Header } from "./components/Header";
import { Home } from "./components/HomePage";
import { Skills } from "./components/WhatIDo";
import { LanguageProvider } from "./hooks/useLanguage"

export function App() {
  return (
    <LanguageProvider>

    <Header/>
    <Home/>
    <WhoAmI/>
    <Skills/>
    <MyWork/>
    <Footer/>

    <GlobalStyle/>

    </LanguageProvider>
  );
}

