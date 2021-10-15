import { GlobalStyle } from "./styles/global";
import { Footer} from "./components/Footer"
import { MyBlog } from "./components/MyBlog";
import { MyWork } from "./components/MyWork";



export function App() {
  return (
    <>
    <div>
      Hello World
    </div>

    <MyWork></MyWork>
    <MyBlog></MyBlog>
    <Footer></Footer>

    <GlobalStyle></GlobalStyle>
    </>
  );
}

