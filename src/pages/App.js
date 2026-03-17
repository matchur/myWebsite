import React, { useCallback } from 'react';
import Windows95Layout from '../layouts/Windows95Layout';
import { useWindowsManager } from '../hooks/useWindowsManager';
import AboutWindow from '../sections/AboutWindow';
import ProjectsWindow from '../sections/ProjectsWindow';
import SkillsWindow from '../sections/SkillsWindow';
import ContactWindow from '../sections/ContactWindow';
import ProjectImagesWindow from '../sections/ProjectImagesWindow';
import ImageViewerWindow from '../sections/ImageViewerWindow';
import { projects } from '../data/projects';
import '../styles/windows95.css';

function App() {
  const {
    windows,
    desktopWindows,
    orderedWindows,
    openWindow,
    openOrFocusWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    toggleFromTaskbar,
  } = useWindowsManager();

  const findProjectById = useCallback(
    (projectId) => projects.find((project) => project.id === projectId),
    [],
  );

  const handleOpenImages = useCallback(
    (projectId) => {
      const project = findProjectById(projectId);
      if (!project || !project.images?.length) {
        return;
      }

      openOrFocusWindow({
        id: `project-images-${project.id}`,
        title: `Imagens - ${project.title}`,
        kind: 'project-images',
        payload: { projectId: project.id },
      });
    },
    [findProjectById, openOrFocusWindow],
  );

  const handleOpenImageViewer = useCallback(
    (projectId, image) => {
      openOrFocusWindow({
        id: `image-viewer-${projectId}-${image.file}`,
        title: image.name,
        kind: 'image-viewer',
        payload: { projectId, image },
      });
    },
    [openOrFocusWindow],
  );

  const renderWindowContent = useCallback(
    (windowItem) => {
      switch (windowItem.kind) {
        case 'section-about':
          return <AboutWindow />;
        case 'section-projects':
          return <ProjectsWindow onOpenImages={handleOpenImages} />;
        case 'section-skills':
          return <SkillsWindow />;
        case 'section-contact':
          return <ContactWindow />;
        case 'project-images': {
          const project = findProjectById(windowItem.payload?.projectId);
          return (
            <ProjectImagesWindow
              project={project}
              onOpenImage={handleOpenImageViewer}
            />
          );
        }
        case 'image-viewer':
          return <ImageViewerWindow image={windowItem.payload?.image} />;
        default:
          return <p>Janela sem conteúdo.</p>;
      }
    },
    [findProjectById, handleOpenImageViewer, handleOpenImages],
  );

  return (
    <Windows95Layout
      windows={windows}
      desktopWindows={desktopWindows}
      orderedWindows={orderedWindows}
      onOpenWindow={openWindow}
      onFocusWindow={focusWindow}
      onCloseWindow={closeWindow}
      onMinimizeWindow={minimizeWindow}
      onToggleWindow={toggleFromTaskbar}
      renderWindowContent={renderWindowContent}
    />
  );
}

export default App;
