import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Experience from "./Component/Experience";
import Intro from "./Component/Intro";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";
import Technologies from "./Component/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Intro/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Blog/>
        <Contact/>
      </div>

    </div>
  )
}