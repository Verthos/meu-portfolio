import { GlobalStyle } from "./styles/global";
import { Footer} from "./components/Footer"
import { MyWork } from "./components/MyWork";
import { WhoAmI } from "./components/WhoAmI";
import { Header } from "./components/Header";
import { Home } from "./components/HomePage";
import { Skills } from "./components/WhatIDo";


export function App() {
  return (
    <main>

    <Header/>
    <Home/>
    <WhoAmI/>
    <Skills/>
    <MyWork/>
    <Footer/>

    <GlobalStyle/>

    </main>
  );
}

