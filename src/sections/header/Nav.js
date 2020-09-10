import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ isScrolled }) {
  const linkColour = isScrolled ? '#000' : '#fff';
  const dynamicNavStyling = {
    color: linkColour,
  };

  const navLinks = [
    {
      title: 'Services',
      url: 'services',
    },
    {
      title: 'Work',
      url: 'work',
    },
    {
      title: 'About',
      url: 'about',
    },
    {
      title: 'Blog',
      url: 'blog',
    },
    {
      title: 'Contact',
      url: 'contact',
    },
  ];

  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.title} style={dynamicNavStyling}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
