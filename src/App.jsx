import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import ComingSoon from "./sections/ComingSoon";
import FirstVideo from "./sections/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () =>{
    return(
        <main>
          <Navbar/ >
          <Hero />
          <ComingSoon/>
          <FirstVideo />
        </main>
    )
}

export default App
