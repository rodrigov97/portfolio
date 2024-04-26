'use client';

import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import buildDots from '../../../common/scripts/dots';
import Code from '../../../../public/assets/images/code.svg';
import NavigationItem from '@/common/interfaces/navigation-items';

import './header.scss';

interface Props {
  navItems: NavigationItem[];
}

const Header = ({ navItems }: Props) => {
  const headerRef = useRef() as MutableRefObject<HTMLElement>;

  const scrollIntoView = useCallback((ref: MutableRefObject<HTMLElement>) => {
    if (!ref) return;

    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    buildDots();
  });

  return (
    <>
      <canvas id="canvas" className="dots snap-center"></canvas>
      <section ref={headerRef} className="header">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="navigation"
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <ul>
            {navItems.map((item: NavigationItem, index: number) => {
              return (
                <li key={index} onClick={() => scrollIntoView(item.ref)}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="introduction"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="name">
            Olá, sou
            <br />
            <span className="text-primary">R</span>odrigo{' '}
            <span className="text-primary">V</span>entura
          </p>
          <p className="presentation text-primary">
            Sou um desenvolvedor front-end brasileiro e a minha missão é criar a aplicação ideal para o seu negócio.
          </p>
          <Image src={Code} width={110} height={110} alt="Code icon" />
        </motion.div>
      </section>
    </>
  );
};

export default Header;
