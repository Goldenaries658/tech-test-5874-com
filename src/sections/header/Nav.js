import React from 'react';

export default function Nav({ isScrolled }) {
  const linkColour = isScrolled ? '#000' : '#fff';
  const dynamicNavStyling = {
    color: linkColour,
  };

  const navLinks = ['Services', 'Work', 'About', 'Blog', 'Contact'];

  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link} style={dynamicNavStyling}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
