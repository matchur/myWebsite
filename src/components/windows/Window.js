import React from 'react';
import WinButton from './WinButton';

function Window({ title, isFocused, zIndex, onFocus, onClose, onMinimize, children }) {
  return (
    <section
      className={`window95 ${isFocused ? 'is-focused' : ''}`}
      style={{ zIndex }}
      onMouseDown={onFocus}
      aria-label={title}
    >
      <header className="window95__titlebar">
        <strong>{title}</strong>
        <div className="window95__actions">
          <WinButton onClick={onMinimize} title="Minimizar">
            _
          </WinButton>
          <WinButton onClick={onClose} title="Fechar">
            X
          </WinButton>
        </div>
      </header>
      <div className="window95__content">{children}</div>
    </section>
  );
}

export default Window;
