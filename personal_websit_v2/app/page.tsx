"use client"
import Home from './sections/Home';
import Skills from './sections/Skills';
import Navbar from './components/navbar';
import { motion } from "framer-motion"
import './globals.css'
export default function Page() {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <div
          id="home">
          <Home />
        </div>
        <div id="skills">
          <Skills />
        </div>
      </div>
    </>
  );
}