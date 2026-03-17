import { useMemo, useState } from 'react';

const INITIAL_WINDOWS = {
  about: {
    id: 'about',
    title: 'Sobre Mim',
    open: true,
    minimized: false,
    zIndex: 1,
    kind: 'section-about',
    isDesktop: true,
  },
  projects: {
    id: 'projects',
    title: 'Projetos',
    open: true,
    minimized: false,
    zIndex: 2,
    kind: 'section-projects',
    isDesktop: true,
  },
  skills: {
    id: 'skills',
    title: 'Habilidades',
    open: false,
    minimized: false,
    zIndex: 0,
    kind: 'section-skills',
    isDesktop: true,
  },
  contact: {
    id: 'contact',
    title: 'Contato',
    open: false,
    minimized: false,
    zIndex: 0,
    kind: 'section-contact',
    isDesktop: true,
  },
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

  const openOrFocusWindow = ({ id, title, kind, payload }) => {
    setNextZIndex((currentZ) => {
      setWindows((prev) => {
        const prevWindow = prev[id];

        return {
          ...prev,
          [id]: {
            id,
            title,
            kind,
            payload,
            isDesktop: false,
            open: true,
            minimized: false,
            zIndex: currentZ,
            ...(prevWindow || {}),
            title,
            kind,
            payload,
            open: true,
            minimized: false,
            zIndex: currentZ,
            isDesktop: false,
          },
        };
      });

      return currentZ + 1;
    });
  };

  const closeWindow = (id) => {
    setWindows((prev) => {
      const target = prev[id];
      if (!target) {
        return prev;
      }

      if (!target.isDesktop) {
        const next = { ...prev };
        delete next[id];
        return next;
      }

      return {
        ...prev,
        [id]: { ...target, open: false, minimized: false },
      };
    });
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

  const desktopWindows = useMemo(
    () => Object.values(windows).filter((windowItem) => windowItem.isDesktop),
    [windows],
  );

  return {
    windows,
    orderedWindows,
    desktopWindows,
    openWindow,
    openOrFocusWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    toggleFromTaskbar,
  };
}
