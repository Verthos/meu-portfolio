import { GlobalStyle } from "./styles/global";
import { Footer} from "./components/Footer"
import { MyWork } from "./components/MyWork";
import { WhoAmI } from "./components/WhoAmI";
import { StyledHeader } from "./components/Header/styles";



export function App() {
  return (
    <>

    <StyledHeader/>
    <WhoAmI/>
    <MyWork/>
    <Footer/>


    <GlobalStyle/>

    </>
  );
}

