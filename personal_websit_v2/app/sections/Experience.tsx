import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience_info } from '../constants/info';

export default function Experience() {
    return (
        <main className="experience">
            <h1 className="relative pl-4 sm:pl-10 top-16 sm:top-24 sm:text-4xl">
                Experience
                <div className="bg-white h-[4px] w-full"></div>
            </h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#111827', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'white', color: '#000' }}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </main>
    )
}
