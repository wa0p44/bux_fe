import React from 'react';

const Loader = ({ size }) => {
  const style = {
    width: `${size || 2}rem`,
    height: `${size || 2}rem`
  };

  return (
    <div className="spinner-border text-primary m-1 text-center" style={style}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
