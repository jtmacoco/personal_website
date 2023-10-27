"use client"
import { useEffect, useState } from 'react';
import { about } from '../constants/info';
import Image from "next/image";
import personalWeb from "../images/personalWeb.png"
import '../globals.css'
export default function Home() {
  const [text, setText] = useState('');
  const delta = 100
  const hello = "\"Hello, I'm Jonathan Macoco a software developer.\"";
  const code_hello = `console.log(${hello})`;
  const tick = () => {
    let updateText = code_hello.substring(0, text.length + 1);
    setText(updateText)
  }
  useEffect(() => {
    let ticker = setInterval(() => { tick() }, delta)
    return () => { clearInterval(ticker) }
  })
  return (
    <>
      <main className="home w-full h-full">
        <div className='absolute top-40'>
          {/*add personal photo here potentialy*/}
        </div>
        <div className="relative container">
          <p className="text-white text-lg sm:text-2xl text-center  pb-20 ">{text}</p>
          <p className='text-white text-md text-center sm:text-xl pb-20'>{about}</p>
        </div>
      </main>
    </>
  );
}