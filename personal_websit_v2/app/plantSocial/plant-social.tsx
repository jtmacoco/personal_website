"use client"
import Plant from "../components/plant"
import Image from "next/image";
import { plant_social_info } from "../constants/info";
export default function PlantSocial() {
    return (
        <main>
            <div className="relative pl-4 sm:pl-10 top-20 sm:top-24 ">
                <h1
                    className="sm:text-4xl text-green-600">
                    Plant Social
                </h1>
                <div className="bg-green-500 h-[4px]" />
            </div>
            <div className="absolute top-4 sm:top-12 left-12 sm:left-44">
                <Plant />
            </div>
            <div className="container mx-auto h-min-screen">
                {plant_social_info.map((info) => (
                    <>
                        <div className="sm:px-0 px-4 grid grid-cols-3 sm:grid-cols-5 gap-4 flex items-center justify-center mx-auto relative top-28">
                            {info.images.map((image) => (
                                <Image src={image.src} alt={image.alt} />
                            ))}
                        </div>
                        <div className="flex flex-col relative top-32 bg-background">
                            {info.desc.map((d) => (
                                <p className="sm:px-0 px-4 py-4 text-xl">
                                    {d}
                                </p>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </main>
    )
}