import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import './Blog.css';

function BlogList({ darkMode, toggleDarkMode }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    fetch('/blog/posts.json')
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page">
      <BlogHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="blog-list-container">
        <div className="blog-list-header">
          <h1>Blog</h1>
          <p>Thoughts on AI, engineering, and building things that matter.</p>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
              {post.heroImage && (
                <div className="blog-card-image">
                  <img src={post.heroImage} alt={post.title} />
                </div>
              )}
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <span className="blog-card-reading-time">{post.readingTime} min read</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div className="blog-card-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
