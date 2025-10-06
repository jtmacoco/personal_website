"use client"
import Plant from "../components/plant"
import Image from "next/image";
import { plant_social_info } from "../constants/info";
import { motion } from "framer-motion"
export default function PlantSocial() {
    return (
        <main className="bg-background h-screen">
            <div
                className="relative pl-4 sm:pl-10 top-20 sm:top-24 ">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="sm:text-4xl text-green-600">

                    Plant Social
                </motion.h1>
                <div className="bg-green-500 h-[4px]" />
            </div>
            <div className="absolute top-4 sm:top-12 left-12 sm:left-44">
                <Plant />
            </div>
            <div className="mx-auto" >
                {plant_social_info.map((info, index) => (
                    <div key={index}>
                        <div className="container sm:px-0 px-4 grid grid-cols-3 sm:grid-cols-5 gap-4 flex items-center justify-center mx-auto relative top-28">
                            {info.images.map((image) => (
                                <motion.div
                                whileHover={{scale:1.3}}
                                whileTap={{scale:1.3}}
                                key={image.alt}
                                >
                                <Image src={image.src} alt={image.alt} />
                                </motion.div>
                            ))}
                        </div>
                        <div className="bg-background flex flex-col relative top-36 sm:top-58 mx-auto items-center">
                            {info.desc.map((d, d_index) => (
                                <p key={d_index} className="container bg-background sm:px-0 px-4 py-4 text-xl">
                                    {d}
                                </p>
                            ))}
                        </div>
                        <div />
                    </div>
                ))}
            </div>
        </main>
    )
}