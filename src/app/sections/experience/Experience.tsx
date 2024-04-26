import { MutableRefObject } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import Dev from '../../../../public/assets/images/dev.svg';
import PROFESSIONAL_EXPERIENCE from '@/common/constants/professional-experience';
import Timeline from '@/common/components/timeline/Timeline';

import './experience.scss';

interface Props {
  sectionRef: MutableRefObject<any>;
}

const Experience = ({ sectionRef }: Props) => {
  return (
    <section ref={sectionRef} className="experience snap-center">
      <div className="title">
        <div className="line"></div>
        <h2>Experiência Profissional</h2>
      </div>
      <div className="timeline">
        <motion.div
          className="dev-icon"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image src={Dev} width={250} height={250} alt="Graduate" />
        </motion.div>
        <Timeline items={PROFESSIONAL_EXPERIENCE} />
      </div>
    </section>
  );
};

export default Experience;
