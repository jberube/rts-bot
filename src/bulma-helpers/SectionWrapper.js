import React from 'react';

export default function SectionWrapper({ children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
