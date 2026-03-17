import React from 'react';

function ProjectImagesWindow({ project, onOpenImage }) {
  if (!project) {
    return <p>Projeto não encontrado.</p>;
  }

  if (!project.images?.length) {
    return <p>Este projeto não possui imagens cadastradas.</p>;
  }

  return (
    <div className="window-section">
      <h2>Imagens - {project.title}</h2>
      <ul className="file-list95">
        {project.images.map((image) => (
          <li key={image.file}>
            <button
              type="button"
              className="file-item95"
              onClick={() => onOpenImage(project.id, image)}
            >
              <span className="file-item95__icon" aria-hidden="true">
                🖼️
              </span>
              <span>{image.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectImagesWindow;
