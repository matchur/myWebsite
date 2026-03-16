import React, { useMemo, useState } from 'react';
import { projects } from '../data/projects';

function ProjectsWindow() {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = useMemo(
    () => ['Todas', ...new Set(projects.map((project) => project.category))],
    [],
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'Todas'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="window-section">
      <h2>Projetos</h2>
      <div className="chip-row">
        {categories.map((category) => (
          <button
            key={category}
            className={`chip ${activeCategory === category ? 'is-active' : ''}`}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tecnologias:</strong> {project.technologies.join(', ')}
            </p>
            {project.externalLinks?.length ? (
              <ul>
                {project.externalLinks.map((link) => (
                  <li key={link.externalLink}>
                    <a href={link.externalLink}>{link.externalName}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProjectsWindow;
