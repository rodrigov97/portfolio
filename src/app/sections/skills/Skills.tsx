import { MutableRefObject } from 'react';

import Skill from '@/common/interfaces/skill';
import SKILLS from '@/common/constants/skills';

import './skills.scss';
import { motion } from 'framer-motion';

interface Props {
  sectionRef: MutableRefObject<any>;
}

const Skills = ({ sectionRef }: Props) => {
  return (
    <section ref={sectionRef} className="skills snap-center">
      <div className="title">
        <div className="line"></div>
        <h2>Habilidades</h2>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-8">
        {SKILLS.map((skill: Skill, index: number) => {
          return (
            <motion.div
              className="skill"
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <div>{skill.name}</div>
              <div className="skill-progress">
                <div className="skill-progress-count">
                  <div
                    className="bar"
                    style={{ width: `${skill.progress || 0}%` }}
                  ></div>
                </div>
                <span className="counter">{skill.progress}%</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
