import React, { useMemo } from 'react';
import Windows95Layout from '../layouts/Windows95Layout';
import { useWindowsManager } from '../hooks/useWindowsManager';
import AboutWindow from '../sections/AboutWindow';
import ProjectsWindow from '../sections/ProjectsWindow';
import SkillsWindow from '../sections/SkillsWindow';
import ContactWindow from '../sections/ContactWindow';
import '../styles/windows95.css';

function App() {
  const {
    windows,
    orderedWindows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    toggleFromTaskbar,
  } = useWindowsManager();

  const sectionsById = useMemo(
    () => ({
      about: <AboutWindow />,
      projects: <ProjectsWindow />,
      skills: <SkillsWindow />,
      contact: <ContactWindow />,
    }),
    [],
  );

  return (
    <Windows95Layout
      windows={windows}
      orderedWindows={orderedWindows}
      onOpenWindow={openWindow}
      onFocusWindow={focusWindow}
      onCloseWindow={closeWindow}
      onMinimizeWindow={minimizeWindow}
      onToggleWindow={toggleFromTaskbar}
      sectionsById={sectionsById}
    />
  );
}

export default App;
