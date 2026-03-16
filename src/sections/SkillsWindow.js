import React from 'react';
import { skills } from '../data/skills';

function SkillsWindow() {
  return (
    <div className="window-section">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillsWindow;
