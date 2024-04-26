import { useEffect, useMemo, useState } from 'react';

import { motion } from 'framer-motion';

import TimelineData from '@/common/interfaces/timeline-data';

import './item.scss';

interface Props {
  alignment: 'start' | 'end';
  data: TimelineData;
  isLast: boolean;
}

const TimelineItem = ({ alignment, data, isLast }: Props) => {
  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window?.innerWidth;

      if (width <= 640) {
        setInitialX(100);
        return;
      }
    }

    setInitialX(alignment === 'start' ? -100 : 100);
  });

  return (
    <>
      {initialX != 0 && (
        <li className="timeline-item">
          <div className="timeline-middle">
            <div className="dot"></div>
          </div>
          <motion.div
            className={`content timeline-${alignment}`}
            initial={{ opacity: 0, x: initialX }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div>{data.time}</div>
            <h3>{data.title}</h3>
            <h4>{data.subtitle}</h4>
            {data.description && <p>{data.description}</p>}
          </motion.div>
          {!isLast && <hr />}
        </li>
      )}
    </>
  );
};

export default TimelineItem;
