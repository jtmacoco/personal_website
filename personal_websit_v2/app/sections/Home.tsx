"use client"
import { useEffect, useState } from 'react';
import '../globals.css'
import { about } from '../constants/info';
export default function Home() {
  const [text,setText] = useState('');
  const delta = 100
  const hello = "\"Hello, I'm Jonathan Macoco a software developer.\"";
  const code_hello = `console.log(${hello})`;
  const tick = () =>{
    let updateText = code_hello.substring(0,text.length+1);
    setText(updateText)
  }
  useEffect(()=>{
    let ticker = setInterval(()=>{tick()},delta)
    return ()=>{clearInterval(ticker)}
  })
  return (
    <>
      <main className="home w-full h-full">
        <div className="relative container rounded">
            <p className="text-white text-2xl text-center pb-20 ">{text}</p>
            <p className='text-white text-xl'>{about}</p>
        </div>
      </main>
    </>
  );
}