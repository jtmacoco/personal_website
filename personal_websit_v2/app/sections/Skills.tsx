"use client"
import { skill } from "../constants/info"
import { motion } from "framer-motion"
import Image from "next/image"
export default function skills() {
    const fadInVariants = {
        initial: { opacity: 0, y: -150 },
        animate: (index: number) => ({
            opacity: 1, y: 0,
            transition: { delay: 0.05 * index }
        }),
    }
    return (
        <main className="skills">
            <h1 className="relative pl-4 sm:pl-10 top-16 sm:top-24 sm:text-4xl">
                Skills
                <div className="bg-white h-[4px] w-full"></div>
            </h1>
            <div className="container flex items-center justify-center mx-auto h-screen">
                <ul className="grid grid-cols-3 grid-rows-2 sm:grid-cols-4 pt-8 sm:pt-0 sm:grid-rows-4 sm:gap-28 ">
                    {skill.map((s, index) => (
                        <motion.li
                            variants={fadInVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            key={s.title}>
                            <div className="skills-image mx-auto pt-3 sm:pt-4">
                                <Image src={s.src} alt={s.title} 
                                    className="mx-auto sm:h-14 sm:w-14 h-8 w-8"  />
                            </div>
                            <p className="text-center">{s.title}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </main>
    )
}