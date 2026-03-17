import React from 'react';
import { socialLinks } from '../data/contact';

function AboutWindow() {
  return (
    <div className="window-section">
      <h2>Olá, me chamo Matheus V. Costa</h2>
      <img src='imgs\foto1.png'></img>
      <p>
        Bem vindo ao meu site.
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
