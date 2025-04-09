// src/components/AboutLayout.tsx
import { ReactNode } from 'react';
// import Image from 'next/image';
//import me from 'avatar.jpg';

interface AboutLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
// const AboutLayout = ({ title, subtitle, children }: AboutLayoutProps) => {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="about-layout">
          {/* Left side: Image, title, and subtitle */}
          {/* <div className="left-column-about">
            <div className="image-container">
              <Image
                src={"/avatar.jpg"}
                alt="Jean-Romain Luttringer"
                width={240}
                height={270}
                className="profile-image"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
          </div> */}

          {/* Right side: Page content */}
          <div className="right-column-about">
            {children}
          </div>
        </div>
      </section>

      {/* New section for the quotes, using Flexbox to arrange them horizontally */}
      {/* <section className="quote-section p-3 p-lg-5">
      <div className="quotes-header">
          <hr className="quotes-line" />
          <p className="quotes-title">What others say</p>
          <hr className="quotes-line" />
        </div>
        <div className="quote-container">
          <p className="quote">
            "Just shy of being interesting."
            <cite className="quote-author">Very good colleague</cite>
          </p>
          <p className="quote">
            "Almost as competent as he is funny."
            <cite className="quote-author">Colleague</cite>
          </p>
          <p className="quote">
            "Occasionally has good insights <br></br>that might even be useful."
            <cite className="quote-author">Very good colleague</cite>
          </p>   
        </div>
      </section> */}
    </div>
  );
};

export default AboutLayout;
