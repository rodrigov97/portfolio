import { MutableRefObject } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import Diploma from '../../../../public/assets/images/diploma.svg';
import EDUCATION from '@/common/constants/education';
import Timeline from '@/common/components/timeline/Timeline';

import './education.scss';

interface Props {
  sectionRef: MutableRefObject<any>;
}

const Education = ({ sectionRef }: Props) => {
  return (
    <section ref={sectionRef} className="education snap-center">
      <div className="title">
        <div className="line"></div>
        <h2>Formação Acadêmica</h2>
      </div>
      <div className="timeline">
        <motion.div
          className="diploma-icon"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image src={Diploma} width={250} height={250} alt="Graduate" />
        </motion.div>
        <Timeline items={EDUCATION} />
      </div>
    </section>
  );
};

export default Education;
