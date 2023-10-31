import { projects } from "../constants/info"
import Image from "next/image"
import Link from "next/link"
export default function Projects() {
    return (
        <main className="projects">
            <h1 className="relative pl-4 sm:pl-10 top-16 sm:top-24 sm:text-4xl">
                Projects
                <div className="bg-white h-[4px] w-full" />
            </h1>
            <div className="relative top-1/3 container flex items-center justify-center mx-auto gap-4  ">
                <div className=" text-white absolute right-2 bottom-[85%] pb-20 ">
                    view more
                </div>
                {projects.slice(0, 3).map((proj) => (
                    <ul className="border border-white h-[500px] w-[900px]">
                        <li key={proj.title}>
                            <Image src={proj.src} alt={proj.title} className={` `} />
                            <div className="flex flex-col pt-1">
                                <p className="pl-2 txt-md text-gray-400 py-1">
                                    {proj.tools}
                                </p>
                                <hr className="w-full h-px mx-auto  bg-gray-100 border-0 rounded"></hr>
                            </div>
                            <div className="flex items-center justify-center pt-2 text-bold">
                                {proj.title}
                            </div>
                            <div className="px-2 pt-1">
                                {proj.description}
                            </div>
                            <div className="absolute bottom-0 flex items-center justify-center mx-auto">
                                <Link href={`${proj.github}`} target="_blank" className=" px-2 pt-2 border border-purple-800 text-purple-600">Github</Link>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>

        </main>
    )
}