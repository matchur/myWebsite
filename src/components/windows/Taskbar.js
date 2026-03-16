import React, { useEffect, useState } from 'react';
import WinButton from './WinButton';

function Taskbar({ windows, onToggleWindow }) {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const updateClock = () => {
      setClock(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    };

    updateClock();
    const timerId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <footer className="taskbar95">
      <div className="taskbar95__buttons">
        {Object.values(windows).map((windowItem) => (
          <WinButton
            key={windowItem.id}
            onClick={() => onToggleWindow(windowItem.id)}
            isActive={windowItem.open && !windowItem.minimized}
          >
            {windowItem.title}
          </WinButton>
        ))}
      </div>
      <div className="taskbar95__clock">{clock}</div>
    </footer>
  );
}

export default Taskbar;
