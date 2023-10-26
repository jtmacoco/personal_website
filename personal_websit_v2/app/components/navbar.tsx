"use client"
import React from "react";
import { navLinks } from "../constants/info";
import Image from "next/image";
import github from "../images/github_logo_white.png"
import linkedin from "../images/linkedin_logo.png"
import email from "../images/email_logo.png"
import Link from 'next/link'

export default function Navbar() {
    const underlineVariants = {
        initial: {
            width: 0,
            opacity: 0,
        },
        hover: {
            width: '100%',
            opacity: 1,
        },
    };
    return (
        <nav className="bg-black sticky top-0 z-50 h-14 flex items-center justify-center">
            <ul className="pl-4 flex flex-row gap-4 ">
                {navLinks.map((link) => (
                    <li key={link.id}
                        className="nav-line">
                        {link.title}
                    </li>
                ))}
            </ul>
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
        </nav>
    );
}
