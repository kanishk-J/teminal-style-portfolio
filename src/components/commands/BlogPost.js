// BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TypingMarkdown from './TypingMarkdown';
import { getYearsOfExperience } from '../../services/util';

const postMap = {
  'post-1': '/microservices-architecture.md',
  'post-2': '/coming-soon.md'
};

const BlogPost = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    if (postMap[postId]) {
      fetch(postMap[postId])
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [postId]);

  if (!postMap[postId]) return <p>Post not found.</p>;

  return (
    <div className="markdown">
      <pre style={{ color: '#00ffcc' }}>
{`
  _  __           _     _     _               _       _       
| |/ /__ _ _ __ (_)___| |__ | | __          | | __ _(_)_ __  
| ' // _\` | '_ \\| / __| '_ \\| |/ /       _  | |/ _\` | | '_ \\ 
| . \\ (_| | | | | \\__ \\ | | |   <       | |_| | (_| | | | | |
|_|\\_\\__,_|_| |_|_|___/_| |_|_|\\_\\       \\___/ \\__,_|_|_| |_|                                                                                                                           
`}
      </pre>
      <img
        src="/kanishk.jpg"
        alt="Kanishk Jain"
        style={{ width: '120px', borderRadius: '50%', margin: '1rem 0' }}
      />
      <TypingMarkdown
        content={`Hi, I'm Kanishk Jain — a Backend Engineer and Team Lead with ${getYearsOfExperience()} years of experience.
I specialize in building scalable microservices, leading cross-functional teams,
and integrating cutting-edge AI technologies to drive product growth.`}
      />
      <TypingMarkdown content={content} />
      <p style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Terminal</Link>
      </p>
    </div>
  );
};

export default BlogPost;
