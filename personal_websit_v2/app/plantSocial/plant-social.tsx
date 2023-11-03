"use client"
import Plant from "../components/plant"
import Image from "next/image";
import { plant_social_info } from "../constants/info";
import { motion } from "framer-motion"
export default function PlantSocial() {
    return (
        <main>
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
            <div className="container mx-auto h-min-screen">
                {plant_social_info.map((info, index) => (
                    <div key={index}>
                        <div className="sm:px-0 px-4 grid grid-cols-3 sm:grid-cols-5 gap-4 flex items-center justify-center mx-auto relative top-28">
                            {info.images.map((image, i_index) => (
                                <Image key={image.alt} src={image.src} alt={image.alt} />
                            ))}
                        </div>
                        <div className="flex flex-col relative top-32 bg-background">
                            {info.desc.map((d, d_index) => (
                                <p key={d_index} className="sm:px-0 px-4 py-4 text-xl">
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