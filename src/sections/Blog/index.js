import React, { useState, useEffect } from 'react';
import blogAPI from './js/blogAPI';
import './css/blog.css';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      userId: null,
      title: 'Loading...',
      body: null,
    },
  ]);
  useEffect(() => {
    const fillPosts = async () => {
      try {
        setBlogPosts(await blogAPI.getPosts());
      } catch (err) {
        console.error(`ERROR: Blog/index.js - fillPosts(): ${err.stack}`);
      }
    };

    fillPosts();
  }, []);

  return (
    <main id="blog">
      <h1>
        <Link to="/" className="back-arrow" /> Blog
      </h1>
      {blogPosts.map(({ id, title, body }) => (
        <article key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </main>
  );
}
