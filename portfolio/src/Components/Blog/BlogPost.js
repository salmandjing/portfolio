import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BlogHeader from './BlogHeader';
import './Blog.css';

function BlogPost({ darkMode, toggleDarkMode }) {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [markdown, setMarkdown] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetch('/blog/posts.json')
      .then((res) => res.json())
      .then((posts) => {
        const found = posts.find((p) => p.slug === slug);
        if (found) {
          setPost(found);
          fetch(`/blog/${found.file}`)
            .then((res) => res.text())
            .then(setMarkdown);
        }
      });
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strip the H1 title from markdown since we render it separately
  const content = useMemo(() => {
    return markdown.replace(/^# .+\n+/, '');
  }, [markdown]);

  // Insert grok-uncensored.jpg after "## The actual disagreement" section
  const processedContent = useMemo(() => {
    const marker = '## The actual disagreement';
    const idx = content.indexOf(marker);
    if (idx === -1) return content;
    // Find the end of the heading line
    const lineEnd = content.indexOf('\n', idx);
    if (lineEnd === -1) return content;
    // Find the next paragraph (skip blank lines after heading)
    const nextContent = content.slice(lineEnd);
    const firstParaEnd = nextContent.indexOf('\n\n');
    if (firstParaEnd === -1) return content;
    const insertPoint = lineEnd + firstParaEnd + 2;
    return (
      content.slice(0, insertPoint) +
      '\n![Grok vs Claude debate](/blog/images/grok-uncensored.jpg)\n\n' +
      content.slice(insertPoint)
    );
  }, [content]);

  if (!post) {
    return (
      <div className="blog-page">
        <BlogHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="blog-post-container">
          <p className="blog-loading">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />
      <BlogHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <article className="blog-post-container">
        <Link to="/blog" className="blog-back-link">
          <i className="fa fa-arrow-left"></i> All posts
        </Link>
        <header className="blog-post-header">
          <div className="blog-post-meta">
            <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span className="blog-post-reading-time">{post.readingTime} min read</span>
          </div>
          <h1>{post.title}</h1>
          <div className="blog-post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>
        {post.heroImage && (
          <div className="blog-hero-image">
            <img src={post.heroImage} alt={post.title} />
          </div>
        )}
        <div className="blog-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                if (!inline && match) {
                  return (
                    <SyntaxHighlighter
                      style={darkMode ? oneDark : oneLight}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  );
                }
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              img({ src, alt }) {
                return (
                  <figure className="blog-figure">
                    <img src={src} alt={alt || ''} loading="lazy" />
                  </figure>
                );
              },
            }}
          >
            {processedContent}
          </ReactMarkdown>
        </div>
        <footer className="blog-post-footer">
          <Link to="/blog" className="btn-secondary">
            <i className="fa fa-arrow-left"></i> Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  );
}

export default BlogPost;
