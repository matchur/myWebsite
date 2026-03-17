import React from 'react';
import { socialLinks } from '../data/contact';

function AboutWindow() {
  return (
    <div className="window-section">
      <h2>Olá, me chamo Matheus V. Costa</h2>
      <p>
        Sou desenvolvedor full stack e esta versão do portfólio foi reorganizada para uma arquitetura
        mais previsível, separando interface, estado e dados.
      </p>
      <h3>Redes</h3>
      <ul>
        {socialLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a> — {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutWindow;
