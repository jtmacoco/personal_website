import * as React from "react";
import { experience_info } from '../constants/info';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "../components/timeLineElement";
export default function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <main className="experience">
            <h1 className="relative pl-4 sm:pl-10 top-16 sm:top-24 sm:text-4xl">
                Experience
                <div className="bg-white h-[4px] w-full"></div>
            </h1>
            <div id="verttimeline" className="pt-40 flex" ref={ref}>
                <VerticalTimeline animate={true} className="vertical-timeline" layout="2-columns" lineColor="white" >
                    {experience_info.map((info,index) => (
                        <TimelineElement key={index} item={info}/>
                    ))}
                </VerticalTimeline>
            </div>
        </main>
    )
}
