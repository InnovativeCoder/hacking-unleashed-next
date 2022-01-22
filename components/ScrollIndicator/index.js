import React from 'react';

const ScrollIndicator = ({ children }) => {
  const [scroll, setScroll] = React.useState(0);

  const onScrollProgress = () => {
    const html = document.documentElement;
    const scrollPx = html.scrollTop;
    const winHeightPx = html.scrollHeight - html.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScroll(scrolled);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', onScrollProgress);

    return () => {
      window.removeEventListener('scroll', onScrollProgress);
    };
  }, []);

  const inlineStyle = {
    height: '6px',
    // background: '#4C1D95',
    width: scroll,
  };

  return (
    <>
      <div className="top-0 left-0 w-screen h-1.5 fixed z-40 shadow-2xl bg-gray-300">
        <div style={inlineStyle} className="bg-gradient-to-r from-pink-600 to-purple-600 " />
      </div>
      {children}
    </>
  );
};

export default ScrollIndicator