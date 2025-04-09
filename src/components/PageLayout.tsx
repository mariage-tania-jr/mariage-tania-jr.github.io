// src/components/PageLayout.tsx
import React from 'react';

type PageLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="page-container">
      {/* Left column for the title and subtitle */}
      <div className="left-column">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>

      {/* Right column for the page content */}
      <div className="right-column">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
