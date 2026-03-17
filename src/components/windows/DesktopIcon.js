import React from 'react';

function DesktopIcon({ label, onOpen }) {
  return (
    <button className="desktop-icon" type="button" onClick={onOpen}>
      <span className="desktop-icon__symbol" role="img" aria-label={label}>
        🗂️
      </span>
      <span className="desktop-icon__label">{label}</span>
    </button>
  );
}

export default DesktopIcon;
