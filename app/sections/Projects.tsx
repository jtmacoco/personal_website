import { projects } from "../constants/info"
import Image from "next/image"
import Link from "next/link"
export default function Projects() {
    return (
        <main className="projects">
            <h1 className="relative pl-4 sm:pl-10 top-20 sm:top-24 sm:text-4xl">
                Projects
                <div className="bg-white h-[4px] w-full" />
            </h1>
            <div className="relative top-1/4">
                <div id="view more button" className="relative top-1/4 sm:top-1/3 container flex items-center justify-center mx-auto gap-4  ">
                    <div className=" absolute right-2 bottom-[85%] pb-24 ">
                        <a href="/projects" className="relative inline-flex items-center justify-center p-4 px-3 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500  shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">View More</span>
                            <span className="relative invisible">Button Text</span>
                        </a>
                    </div>
                    {projects.slice(0, 3).map((proj, index) => {
                        const imageLink = proj.href || proj.github || "#";
                        return (
                            <ul key={index} className={`sm:${index < 3 ? "block" : "hidden"} ${index < 1 ? "block" : "hidden"} border border-white h-[495px]  2xl:h-[550px] w-[300px] sm:w-[900px]`}>
                                <li id="proj images" key={proj.title}>
                                    {imageLink !== "#" ? (
                                        <Link href={imageLink} target="_blank">
                                            <Image src={proj.src} alt={proj.title} className={`${proj.h}`} />
                                        </Link>
                                    ) : (
                                        <Image src={proj.src} alt={proj.title} className={`${proj.h}`} />
                                    )}

                                    <div id="proj tools" className="flex flex-col pt-1">
                                        <p className="pl-2 txt-md text-gray-400 py-1">
                                            {proj.tools}
                                        </p>
                                        <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded"></hr>
                                    </div>
                                    <div id="proj title" className="flex items-center justify-center pt-2 text-bold">
                                        {proj.title}
                                    </div>
                                    <div className="px-2 pt-1">
                                        {proj.description}
                                    </div>
                                    <div id="button's" className={`absolute bottom-4 pl-4 flex items-center justify-center mx-auto gap-2`}>
                                        {proj.github && (
                                            <a href={`${proj.github}`} className="relative inline-flex items-center justify-start px-1 py-1 overflow-hidden transition-all bg-transparent hover:bg-white group">
                                                <span className="w-48 h-48 rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative w-full text-left text-purple-600 transition-colors duration-300 ease-in-out group-hover:text-white">Github</span>
                                            </a>
                                        )
                                        }
                                        {proj.href && (
                                            <a
                                                href={proj.href}
                                                className="relative inline-flex items-center justify-start px-1 py-1 overflow-hidden transition-all bg-transparent hover:bg-white group"
                                            >
                                                <span className="w-48 h-48 rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative w-full text-left text-blue-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                                                    Project
                                                </span>
                                            </a>
                                        )}

                                    </div>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}