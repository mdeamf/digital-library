import React, { useEffect, useState } from 'react';
import './styles.scss';

import SectionHeader from '../../components/SectionHeader';
import { FaAngular, FaClipboardCheck, FaFileAlt, FaFileCode, FaKeyboard, FaNodeJs, FaReact } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionNav from '../../components/SectionNav';

const AboutSection = React.forwardRef((_props, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTechnology, setActiveTechnology] = useState(0);
  const [changingTechnology, setChangingTechnology] = useState(0);

  const technologies = [
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      description:
        'High-performance development on Back-End applications, using advanced techniques from JavaScript and TypeScript. RESTFul APIs, Firebase and AWS integration, as well as database modelling with ORMs.',
    },
    {
      name: 'Angular',
      icon: <FaAngular />,
      description:
        'Modern web applications for desktop computers, notebooks and mobile devices. Integration with multiple state-of-the-art libraries, service APIs, lazy loading, and WebView-based Mobile applications with Ionic.',
    },
    {
      name: 'React',
      icon: <FaReact />,
      description:
        'Single-Page Application, Server-Side or Static-Generated web applications, using Redux, Redux Saga, Next.js and others of the most recommended tools. Complete Native-like Mobile development with React Native.',
    },
    {
      name: 'Documentation',
      icon: <FaFileAlt />,
      description:
        'Requirements, UML diagrams and well-written technical documentation for developed applications, or solution proposals.',
    },
    {
      name: 'Best Practices',
      icon: <FaClipboardCheck />,
      description:
        'Applying the best practices of Git/GitFlow, CI/CD Pipelines, SOLID Principles, Clean Architecture, Relational and Non-Relation Databases, always focusing on high-quality results.',
    },
  ];

  const changeActiveTechnology = (i) => {
    if (i === activeTechnology) return;
    setChangingTechnology(true);
    setTimeout(() => {
      setActiveTechnology(i);
    }, 200);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setChangingTechnology(false);
    }, 300);
  }, [activeTechnology]);

  return (
    <div className="about-container" ref={ref}>
      <ScrollAnimation animateOnce={true} animateIn="animate__bounceInLeft" duration={2}>
        <SectionHeader title="Who am I?" />
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn" duration={2} delay={500}>
        <div className="about-me">
          <div className="about-me-img" />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn" duration={1} delay={1000}>
        <div className="about-content">
          <div className="container">
            <div className="row">
              <div className="about-item col-12 col-md-4">
                <ScrollAnimation
                  animateOnce={true}
                  animateIn={isMobile ? 'animate__fadeIn' : 'animate__bounceInLeft'}
                  duration={isMobile ? 1 : 1.5}
                  delay={isMobile ? 0 : 1500}
                >
                  <FaNodeJs className="about-item-icon" />
                  <h2>FullStack Developer</h2>
                  <p>I have been working on both Front-End and Back-End applications within the Node.js platform.</p>
                </ScrollAnimation>
              </div>
              <div className="about-item col-12 col-md-4">
                <ScrollAnimation
                  animateOnce={true}
                  animateIn={isMobile ? 'animate__fadeIn' : 'animate__bounceInUp'}
                  duration={isMobile ? 1 : 1.5}
                  delay={isMobile ? 0 : 1500}
                >
                  <FaKeyboard className="about-item-icon" />
                  <h2>Systems Analyst</h2>
                  <p>
                    Extensive experience with programming, algorithms, databases, pipelines, Web and Mobile
                    applications.
                  </p>
                </ScrollAnimation>
              </div>
              <div className="about-item col-12 col-md-4">
                <ScrollAnimation
                  animateOnce={true}
                  animateIn={isMobile ? 'animate__fadeIn' : 'animate__bounceInRight'}
                  duration={isMobile ? 1 : 1.5}
                  delay={isMobile ? 0 : 1500}
                >
                  <FaFileCode className="about-item-icon" />
                  <h2>Software Engineer</h2>
                  <p>Documentation enthusiast, always focused on quality and providing the best possible solution.</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>

        <div className="about-technologies">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="list-group">
                  {technologies.map((t, i) => {
                    return (
                      <button
                        key={t.name}
                        type="button"
                        className={`about-technologies-item list-group-item list-group-item-action ${
                          i === activeTechnology ? 'active' : ''
                        }`}
                        onClick={() => changeActiveTechnology(i)}
                      >
                        <span className="about-technologies-item-icon">{t.icon}</span>
                        <span>{t.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div className="about-technologies-selected">
                  <div className="container">
                    <div className={`row ${changingTechnology ? 'hide' : 'show'}`}>
                      <div className="col-3">
                        <span className="about-technologies-selected-icon">{technologies[activeTechnology].icon}</span>
                      </div>
                      <div className="col-8">
                        <h3 className="about-technologies-selected-title">{technologies[activeTechnology].name}</h3>
                        <p>{technologies[activeTechnology].description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="section-next">
        <SectionNav text="Other information" onClick={_props.scrollToInfo} />
      </div>

      <svg width="0" height="0">
        <linearGradient id="about-item-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0ea383', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3e0a42', stopOpacity: 1 }} />
        </linearGradient>
      </svg>
    </div>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
