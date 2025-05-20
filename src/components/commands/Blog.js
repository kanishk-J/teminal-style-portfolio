import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/microservices-architecture.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Blog;
