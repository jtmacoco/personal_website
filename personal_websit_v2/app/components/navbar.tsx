"use client"
import React, { useState } from "react";
import { navLinks } from "../constants/info";
import Image from "next/image";
import github from "../images/github_logo_white.png"
import linkedin from "../images/linkedin_logo.png"
import email from "../images/email_logo.png"
import Link from 'next/link'
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
    const [close, setClose] = useState(false);
    const scrollToSection = (id: string): void => {
        const section = document.getElementById(id) as HTMLElement | null;
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        }
        window.history.pushState(null, '', `#${id}`)//changes the url to the section id
    }
    const toggleMenu = () => {
        const updateClose = !close;
        setClose(updateClose);
        localStorage.setItem("close", JSON.stringify(updateClose))
    }
    return (
        <nav className="bg-black sticky top-0 z-50 h-14 flex items-center justify-center">
            <div className="sm:block hidden">
                <ul className=" flex flex-row gap-4 ">
                    {navLinks.map((link) => (
                        <li key={link.id}
                            className="nav-line">
                            <button onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}>
                                {link.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="absolute left-4 sm:hidden">
                <button onClick={toggleMenu}>
                    <FiMenu size={30} color="white" className={`${close ? "hidden" : "block"}`} />
                    <VscChromeClose size={30} color="white" className={`${!close ? "hidden" : "block"}`} />
                </button>
                <div
                    className={`${!close ? "hidden" : "block"}`}>
                    <ul className="justify-center items-center h-10 px-2 bg-black flex flex-row gap-4 rounded-md absolute top-12 ">
                        {navLinks.map((link) => (
                            <li key={link.id}
                                className="nav-line">
                                <button onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}>
                                    {link.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
            <ul className="absolute right-5 flex flex-row gap-4">
                <li>
                    <Link href="https://github.com/jtmacoco">
                        <Image src={github} alt="github_logo" width={35} height={35} />
                    </Link>
                </li>
                <li>
                    <Link href="https://linkedin.com/in/jonathan-macoco">
                        <Image src={linkedin} alt="linkedin_logo" width={35} height={35} />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <Image src={email} alt="email_logo" width={35} height={35} />
                    </Link>
                </li>

            </ul>
        </nav >
    );
}
