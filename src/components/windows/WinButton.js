import React from 'react';

function WinButton({ onClick, children, isActive = false, title }) {
  return (
    <button
      className={`win-button ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}

export default WinButton;
