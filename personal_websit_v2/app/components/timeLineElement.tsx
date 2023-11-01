import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { StaticImageData } from "next/image";
import Image from "next/image"
interface TimelineElementProps {
  item: {
    title: string;
    date: string;
    description: string[];
    src: StaticImageData;
    py: string;
    location: string;
  };
}
export default function TimelineElement({ item }: TimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: '#5f5b6c	', color: 'white'
        }}
        iconStyle={{ background: 'white', color: '#000' }}
        icon={<Image alt={item.title} src={item.src} className={`sm:${item.py} py-4`} />}
        date={item.date}
        visible={inView}
      >
        <h3 className="vertical-timeline-element-title font-bold pb-4 text-white">{item.title}</h3>
        <ol className="marker:text-white list-disc pl-2">
          {item.description.map((desc) => {
            return <li className="text-white">{desc}</li>
          })}
        </ol>
        <p className="text-white">location: {item.location}</p>
      </VerticalTimelineElement>
    </div>
  );
}