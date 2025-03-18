"use client"
import { useEffect, useState } from 'react';
import { about } from '../constants/info';
import { motion, useAnimation } from "framer-motion"
import './home.css'
import MyButton from '../components/myButton';
import '../globals.css'
import Navbar from '../components/navbar';
import NewNavbar from '../components/newNavbar';
export default function NewHome() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const [text, setText] = useState('');
  const delta = 70
  const hello = "\"Hello, I'm a software developer.\"";
  const code_hello = `> console.log(${hello})`;
  const tick = () => {
    let updateText = code_hello.substring(0, text.length + 1);
    setText(updateText)
  }
  useEffect(() => {
    setWindowHeight(window.innerHeight)
    setWindowWidth(window.innerWidth)
  }, [windowHeight, windowWidth])
  useEffect(() => {
    let ticker = setInterval(() => { tick() }, delta)
    return () => { clearInterval(ticker) }
  }, [text])
  return (
    <>
      <body
        className="pt-20 flex h-screen flex-col items-center mx-auto justify-center max-w-full text-center bg-gradient-to-r from-black via-transparent to-black"
      >

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit">
  <motion.div
    className="border-with-top-bottom border-with-top border-t border-b border-white transform-gpu"
    initial={{ height: 0, minWidth: 500 }}
    animate={{ height: windowHeight / 3, maxHeight: 200 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <motion.div
      className="transform-gpu relative flex flex-col items-center justify-center mx-auto w-full h-full text-md sm:text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <p className="pb-5 font-bold text-2xl">JONATHAN MACOCO</p>
      <p>{text}</p>
    </motion.div>
  </motion.div>

  {/* Place NewNavbar directly below the motion.div */}
  <div className="relative w-full pt-14">
    <NewNavbar />
  </div>


        </div>

      </body>

    </>
  );
}