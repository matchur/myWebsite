import { useMemo, useState } from 'react';

const INITIAL_WINDOWS = {
  about: { id: 'about', title: 'Sobre Mim', open: true, minimized: false, zIndex: 1 },
  projects: { id: 'projects', title: 'Projetos', open: true, minimized: false, zIndex: 2 },
  skills: { id: 'skills', title: 'Habilidades', open: false, minimized: false, zIndex: 0 },
  contact: { id: 'contact', title: 'Contato', open: false, minimized: false, zIndex: 0 },
};

export function useWindowsManager() {
  const [windows, setWindows] = useState(INITIAL_WINDOWS);
  const [, setNextZIndex] = useState(3);

  const focusWindow = (id) => {
    setNextZIndex((currentZ) => {
      setWindows((prev) => {
        const target = prev[id];
        if (!target) {
          return prev;
        }

        return {
          ...prev,
          [id]: {
            ...target,
            open: true,
            minimized: false,
            zIndex: currentZ,
          },
        };
      });

      return currentZ + 1;
    });
  };

  const openWindow = (id) => focusWindow(id);

  const closeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], open: false, minimized: false },
    }));
  };

  const minimizeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: true },
    }));
  };

  const toggleFromTaskbar = (id) => {
    const windowState = windows[id];
    if (!windowState) {
      return;
    }

    if (!windowState.open || windowState.minimized) {
      focusWindow(id);
      return;
    }

    minimizeWindow(id);
  };

  const orderedWindows = useMemo(
    () => Object.values(windows).sort((a, b) => a.zIndex - b.zIndex),
    [windows],
  );

  return {
    windows,
    orderedWindows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    toggleFromTaskbar,
  };
}
