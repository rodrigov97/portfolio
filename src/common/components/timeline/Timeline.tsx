import TimelineData from '@/common/interfaces/timeline-data';
import TimelineItem from './TimelineItem';

import './timeline.scss';

const Timeline = ({ items }: { items: TimelineData[] }) => {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      {items.map((data: any, index: number) => {
        return (
          <TimelineItem
            alignment={index % 2 === 0 ? 'start' : 'end'}
            data={data}
            isLast={items.length === index + 1}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default Timeline;
