"use client"
import Home from './sections/Home';
import Navbar from './components/navbar';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import './globals.css'
export default function Page() {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </div>
    </>
  );
}