import React, { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/rootedinculture"
      style={{ height: "900px" }}
    />
  );
};

export default Calendly;
