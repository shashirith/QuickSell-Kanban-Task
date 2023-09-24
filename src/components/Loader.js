import React from 'react';

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const spinnerStyle = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
  };

  const animationStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{animationStyle}</style>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loader;
