import { MutableRefObject } from 'react';
import Image from 'next/image';

import { EnvelopeIcon } from '@heroicons/react/24/outline';

import LinkedIn from '../../../../public/assets/images/linkedin.svg';

import './footer.scss';

interface Props {
  sectionRef: MutableRefObject<any>;
}

const Footer = ({ sectionRef }: Props) => {
  return (
    <section ref={sectionRef} className="more snap-center">
      <div className="content">
        <div className="line"></div>
        <h2>
          <span className="text-primary">
            O que acha de ter uma aplicação personalizada ?
          </span>
          <br />
          Vamos conversar
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="contact">
            <a
              className="item"
              href="https://www.linkedin.com/in/rodrigoventuradev/"
              target="_blank"
            >
              <div className="icon-container">
                <Image
                  src={LinkedIn}
                  width={40}
                  height={40}
                  alt="LinkedIn logo"
                />
              </div>
              <span>LinkedIn</span>
            </a>
            <a className="item" href="mailto:rodrigoventura.dev@gmail.com">
              <div className="icon-container">
                <EnvelopeIcon className="email-icon" />
              </div>
              <span>rodrigoventura.dev@gmail.com</span>
            </a>
          </div>
          <div className="resume">
            <h3>Ou se preferir, pegue meu currículo!</h3>
            <a
              className="btn btn-ghost"
              download="resume.pdf"
              href="./assets/files/resume.pdf"
            >
              Currículo
            </a>
          </div>
        </div>
      </div>
      <footer className="base-footer">@2024 Rodrigo Ventura</footer>
    </section>
  );
};

export default Footer;
