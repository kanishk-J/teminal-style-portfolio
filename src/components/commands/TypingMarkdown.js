import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const TypingMarkdown = ({ content }) => {
  const [typed, setTyped] = useState('');
  const speed = 5;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(content.slice(0, i));
      i++;
      if (i > content.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [content]);

  return <ReactMarkdown>{typed}</ReactMarkdown>;
};

export default TypingMarkdown;
