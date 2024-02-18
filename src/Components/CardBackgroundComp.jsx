import React from 'react';

function BackgroundComponent({ children, imageUrl }) {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '300px',
    height: '400px',
    position: 'relative',
    borderRadius: "5%",
    opacity: "0.7",
  };

  return (
    <div style={divStyle}>
      {children}
    </div>
  );
}

export default BackgroundComponent;
