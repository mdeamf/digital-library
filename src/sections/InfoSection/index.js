import React from 'react';
import './styles.scss';

import SectionHeader from '../../components/SectionHeader';
import SectionNav from '../../components/SectionNav';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaCat, FaChess, FaDragon, FaFeather, FaFlagUsa, FaGamepad, FaGlasses, FaSmileWink } from 'react-icons/fa';

const InfoSection = React.forwardRef((_props, ref) => {
  return (
    <div className="info-container" ref={ref}>
      <ScrollAnimation animateOnce={true} animateIn="animate__bounceInLeft" duration={2}>
        <SectionHeader title="Other Info" invert />
      </ScrollAnimation>

      <div className="container">
        <div className="row">
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaCat />
              </div>
              <h6>Cat Person</h6>
            </ScrollAnimation>
          </div>
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaFlagUsa />
              </div>
              <h6>Fluent in English</h6>
            </ScrollAnimation>
          </div>
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaGamepad />
              </div>
              <h6>Retro Gamer</h6>
            </ScrollAnimation>
          </div>
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaFeather />
              </div>
              <h6>Passionate Writer</h6>
            </ScrollAnimation>
          </div>
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaChess />
              </div>
              <h6>Aspiring Game Designer</h6>
            </ScrollAnimation>
          </div>
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaDragon />
              </div>
              <h6>Fantasy & Sci-Fi Lover</h6>
            </ScrollAnimation>
          </div>
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaGlasses />
              </div>
              <h6>Nerdy</h6>
            </ScrollAnimation>
          </div>
          <div className="col-4 col-md-3">
            <ScrollAnimation className="info-content" animateIn="animate__zoomIn" animateOnce>
              <div className="info-content-icon">
                <FaSmileWink />
              </div>
              <h6>Diabetic, But Cool</h6>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="section-next">
        <SectionNav text="Where to find me" onClick={_props.scrollToContact} />
      </div>
    </div>
  );
});

InfoSection.displayName = 'InfoSection';

export default InfoSection;
