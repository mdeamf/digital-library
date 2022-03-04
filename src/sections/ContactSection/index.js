import React from 'react';
import './styles.scss';

import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const ContactSection = React.forwardRef((_props, ref) => {
  const openLinkedIn = () => window.open('https://linkedin.com/in/mdeamf', '_blank');
  const openGitHub = () => window.open('https://github.com/mdeamf', '_blank');

  return (
    <div className="contact-container" ref={ref}>
      <h4>Here&apos;s where you can find me! :)</h4>
      <h6>(mostly as &quot;mdeamf&quot;)</h6>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <ScrollAnimation className="contact-content" animateIn="animate__zoomIn" animateOnce>
              <div className="contact-content-icon" onClick={openLinkedIn}>
                <FaLinkedin />
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-12 col-md-6">
            <ScrollAnimation className="contact-content" animateIn="animate__zoomIn" animateOnce>
              <div className="contact-content-icon" onClick={openGitHub}>
                <FaGithubSquare />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="contact-footer">Made with ❤️, by mdeamf, 2022</div>
    </div>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
