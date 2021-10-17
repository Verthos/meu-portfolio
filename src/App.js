import { GlobalStyle } from "./styles/global";
import { Footer} from "./components/Footer"
import { MyWork } from "./components/MyWork";
import { WhoAmI } from "./components/WhoAmI";
import { Header } from "./components/Header";
import { Home } from "./components/HomePage";



export function App() {
  return (
    <main>

    <Header/>
    <Home/>
    <WhoAmI/>
    <MyWork/>
    <Footer/>


    <GlobalStyle/>

    </main>
  );
}

