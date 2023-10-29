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
            <h1 className="relative pl-10 top-24 text-4xl">
                Skills
                <div className="bg-white h-[4px] w-screen"></div>
            </h1>
            <div className="container flex items-center justify-center mx-auto h-screen">
                <ul className="grid grid-cols-4 grid-rows-4 gap-28">
                    {skill.map((s, index) => (
                        <motion.li
                            variants={fadInVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            key={s.title}>
                            <div className="skills-image mx-auto pt-4">
                                <Image src={s.src} alt={s.title} height={50} width={50}
                                    className="mx-auto" />
                            </div>
                            <p className="text-center">{s.title}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </main>
    )
}