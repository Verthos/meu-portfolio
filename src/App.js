import React from "react";

import { GlobalStyle } from "./styles/global";
import { Footer} from "./components/Footer"
import { FeaturedWorks } from "./components/FeaturedWorks"
import { MyWork } from "./components/MyWork";
import { WhoAmI } from "./components/WhoAmI";
import { Header } from "./components/Header";
import { Home } from "./components/HomePage";
import { Skills } from "./components/WhatIDo";

export function App() {
  
  


  return (

      
      <>
      <Header/>
      <Home/>
      <WhoAmI/>
      <Skills/>
      <FeaturedWorks/>
      <MyWork/>
      <Footer/>
      <GlobalStyle/>
      </>
  );
}


/*
const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return() => window.removeEventListener("scroll", handleScroll)
    },[])



    <div
        className="backgroundDiv"
        style={{transform: `translateY(${offsetY * 0.5}px)`}}
    ></div>


*/

