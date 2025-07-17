import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import ComingSoon from "./sections/ComingSoon";

gsap.registerPlugin(ScrollTrigger);

const App = () =>{
    return(
        <main>
          <Navbar/ >
          <Hero />
          <ComingSoon/>
        </main>
    )
}

export default App
