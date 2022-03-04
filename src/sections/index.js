import { useEffect, useRef, useState } from 'react';

import MauSection from './MauSection';
import AboutSection from './AboutSection';
import InfoSection from './InfoSection';
import ContactSection from './ContactSection';

const Sections = () => {
  const [step, setStep] = useState(0);
  const aboutRef = useRef();
  const infoRef = useRef();
  const contactRef = useRef();

  const scrollWindow = (ref) => window.scrollTo({ top: ref?.offsetTop, behavior: 'smooth' });

  const scrollSection = (newStep, ref) => {
    if (step < newStep) setStep(newStep);
    else scrollWindow(ref);
  };

  const scrollToAbout = () => scrollSection(1, aboutRef.current);
  const scrollToInfo = () => scrollSection(2, infoRef.current);
  const scrollToContact = () => scrollSection(3, contactRef.current);

  useEffect(() => {
    if (step === 1) scrollWindow(aboutRef.current);
    if (step === 2) scrollWindow(infoRef.current);
    if (step === 3) scrollWindow(contactRef.current);
  }, [step]);

  return (
    <div>
      <MauSection scrollToAbout={scrollToAbout} />
      {step > 0 && <AboutSection scrollToInfo={scrollToInfo} ref={aboutRef} />}
      {step > 1 && <InfoSection ref={infoRef} scrollToContact={scrollToContact} />}
      {step > 2 && <ContactSection ref={contactRef} />}
    </div>
  );
};

export default Sections;
