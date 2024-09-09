import Link from "next/link";
import Image from "next/image";
import { projects } from "../constants/info";
export default function ProjectsPage() {
    const hide = (title: string) => {
        const titles = ["Plant Social","Factoring a Large Semiprime","Game Controller Attachment"]
        if (titles.includes(title)) {
            return 'hidden'
        }
        else {
            return 'block'
        }
    }
    return (
        <main className="bg-background bg-screen relative min-h-screen pb-4 ">
            <h1 className="pl-4 pb-4 pt-4 sm:pt-8 sm:pb-0 sm:pl-10 top-16 sm:top-24 sm:text-4xl">
                Projects
                <div className="bg-white h-[4px] w-full" />
            </h1>
            <div className="pt-2 sm:pt-20 flex items-center justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 container px-2">
                    {projects.map((proj, index) => (
                        <ul key={index} className={`relative sm:block border border-white h-[510px]`}>
                            <li id="proj images" key={proj.title}>
                                <Link href={`${proj.href}`} target="_blank">
                                    <Image src={proj.src} alt={proj.title} className={`${proj.h} `} />
                                </Link>
                                <div id="proj tools" className="flex flex-col pt-1">
                                    <p className="pl-2 txt-md text-gray-400 py-1">
                                        {proj.tools}
                                    </p>
                                    <hr className="w-full h-px mx-auto bg-gray-100 border-0 rounded"/>
                                </div>
                                <div id="proj title" className="flex items-center justify-center pt-2 font-bold">
                                    {proj.title}
                                </div>
                                <div className="px-2 pt-1">
                                    {proj.description}
                                </div>
                                 <div id="button's" className={`absolute bottom-4 pl-4 flex items-center justify-center mx-auto gap-2`}>
                                    <div className={`${hide(proj.title)}`}>
                                        <a href={`${proj.github}`} className="relative inline-flex items-center justify-start px-1 py-1 overflow-hidden transition-all bg-transparent hover:bg-white group">
                                            <span className="w-48 h-48 rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                            <span className="relative w-full text-left text-purple-600 transition-colors duration-300 ease-in-out group-hover:text-white">Github</span>
                                        </a>
                                    </div>
                                    <a href={`${proj.href}`} className="relative inline-flex items-center justify-start px-1 py-1 overflow-hidden transition-all bg-transparent hover:bg-white group">
                                        <span className="w-48 h-48 rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-blue-600 transition-colors duration-300 ease-in-out group-hover:text-white">Project</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </main>
    )
}