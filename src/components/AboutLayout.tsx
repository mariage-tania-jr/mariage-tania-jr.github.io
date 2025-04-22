// src/components/AboutLayout.tsx
import { ReactNode } from 'react';

interface AboutLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AboutLayout = ({ title, subtitle, children }: AboutLayoutProps) => {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="about-layout">
          {/* Left side: Title and subtitle */}
          <div className="left-column-about">
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
          </div>

          {/* Right side: Page content */}
          <div className="right-column-about">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutLayout;