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
    bg:string;
    company:string;
  };
}
export default function TimelineElement({ item }: TimelineElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true ,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: '#5f5b6c	', color: 'white'
        }}
        iconStyle={{ background:item.bg, color: '#5546FF' }}
        icon={<Image alt={item.title} src={item.src}  />}
        iconClassName={`${item.py}  `}
        date={item.date}
        visible={inView}
      >
        <h1 className="text-white pb-4">Company:<span className="font-bold"> {item.company}</span></h1>
        <h3 className="vertical-timeline-element-title pb-4 text-white">{item.title}</h3>
        <ol className="marker:text-white list-disc pl-2">
          {item.description.map((desc) => {
            return <li key={desc} className="text-white">{desc}</li>
          })}
        </ol>
        <p className="text-white">location: {item.location}</p>
      </VerticalTimelineElement>
    </div>
  );
}