import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import ComingSoon from "./sections/ComingSoon";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/lucia";
import PostCard from "./sections/PostCard";

gsap.registerPlugin(ScrollTrigger);

const App = () =>{
    return(
        <main>
          <Navbar/ >
          <Hero />
          <ComingSoon/>
          <FirstVideo />
          <Jason />

          <SecondVideo />
          <Lucia />
          <PostCard />
        </main>
    )
}

export default App
