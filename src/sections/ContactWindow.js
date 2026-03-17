import React from 'react';
import { contactLinks } from '../data/contact';

function ContactWindow() {
  return (
    <div className="window-section">
      <h2>Contato</h2>
      <ul>
        {contactLinks.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> <a href={item.href}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactWindow;
