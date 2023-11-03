"use client"
import Plant from "../components/plant"
import Image from "next/image";
import plant_social_pictures from "../images/plant_social_picture.png"
export default function PlantSocial() {
    return (
        <main >
            <div className="relative pl-4 sm:pl-10 top-20 sm:top-24 ">
                <h1
                    className="sm:text-4xl text-green-600">
                    Plant Social
                </h1>
                <div className="bg-green-500 h-[4px]" />
            </div>
            <div className="absolute top-12 left-44">
                <Plant />
            </div>
        </main>
    )
}