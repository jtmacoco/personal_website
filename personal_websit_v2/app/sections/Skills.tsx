"use client"
import { skill } from "../constants/info"
import { motion } from "framer-motion"
import Image from "next/image"
    const fadInVariants = {
        initial: { opacity: 0},
        animate: (index: number) => ({
            opacity: 1,
            transition: { delay: 0.09 * index }
        }),
    }
export default function skills() {
    return (
        <main className="skills">
            <h1 className="relative pl-4 sm:pl-10 top-20 sm:top-24 sm:text-4xl">
                Skills
                <div className="bg-white h-[4px] w-full"></div>
            </h1>
            <div className="container flex items-center justify-center mx-auto h-screen">
                <ul className="grid grid-cols-3 grid-rows-2 sm:grid-cols-4 pt-24 sm:pt-0 sm:grid-rows-4 gap:2 sm:gap-x-28 lg:gap-y-4 2xl:gap-40 ">
                    {skill.map((s, index) => (
                        <motion.li
                            variants={fadInVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                            key={s.title}>
                            <div className="bg-white rounded-full h-12 w-12 sm:h-20 mx-auto sm:w-20 items-center justify-center flex">
                            <Image src={s.src} alt={s.title} className="mx-auto sm:h-14 sm:w-14 h-8 w-8" loading="lazy"  />
</div>
                            <p className="text-center">{s.title}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </main>
    )
}