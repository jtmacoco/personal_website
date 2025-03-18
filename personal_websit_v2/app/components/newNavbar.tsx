"use client"
import React, { useState } from "react";
import { navLinks } from "../constants/info";
import Image from "next/image";
import github from "../images/github_logo_white.png"
import linkedin from "../images/linkedin_logo.png"
import { motion } from "framer-motion"
import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
import '.././sections/home.css'
import { VscChromeClose } from "react-icons/vsc";
export default function NewNavbar() {
    const [close, setClose] = useState(false);
    const [reload, setReload] = useState(true);
    const scrollToSection = (id: string): void => {
        const section = document.getElementById(id) as HTMLElement | null;
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY
            window.scrollTo({ top: y, behavior: 'smooth', });
        }
        window.history.pushState(null, '', `#${id}`)//changes the url to the section id
    }
    const toggleMenu = () => {
        const updateClose = !close;
        setClose(updateClose);
        localStorage.setItem("close", JSON.stringify(updateClose))
    }
    const menuVariants = {
        hidden: { x: 0 },
        visible: {
            x: "-100%",
            transition: { delay: .5 },
        }
    }
    return (
        <nav className=' items-center flex flex-col justify-center mx-auto text-center border border-white rounded-md py-5'>
            <div key="navLinks reg" className="sm:block hidden">
                <ul className=" flex flex-row gap-4 ">
                    <Link href="resume" className="nav-line text-white">
                        RESUME
                    </Link>
                    {navLinks.map((link) => (
                        <li key={link.id}
                            className="nav-line">
                            <button onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}>
                                {link.title}
                            </button>
                        </li>
                    ))}
                     <Link href="https://github.com/jtmacoco" className="nav-line text-white">
                       GITHUB 
                    </Link>
                     <Link href="https://linkedin.com/in/jonathan-macoco" className="nav-line text-white">
                      LINKEDIN
                    </Link>
                </ul>
            </div>

            <div key="nav-links mobile" className="absolute left-4 sm:hidden">
                <button onClick={() => { toggleMenu(); setReload(false); }}>
                    <FiMenu size={30} color="white" className={`${close ? "hidden" : "block"}`} />
                </button>
                <motion.div
                    initial={"hidden"}
                    animate={close ? "hidden" : "visible"}
                    variants={menuVariants}
                    className={`${reload ? "hidden" : "block"} fixed top-0 left-0 bg-black bg-cover h-screen w-screen `}>
                    <button onClick={toggleMenu} className="relative top-2 left-2">
                        <VscChromeClose size={30} color="white" className={`${!close ? "hidden" : "block"}`} />
                    </button>
                    <ul className="pb-40 justify-center items-center flex flex-col gap-16 rounded-md my-auto h-screen">
                        {navLinks.map((link) => (
                            <li key={link.id}
                                className="nav-line">
                                <button onClick={(e) => { e.preventDefault(); scrollToSection(link.id); toggleMenu() }}>
                                    {link.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div >

        </nav >
    );
}
