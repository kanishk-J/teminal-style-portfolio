import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Prompt from './Prompt';
import Whoami from './commands/Whoami';
import Skills from './commands/Skills';
import Experience from './commands/Experience';
import Social from './commands/Social';
import HireMe from './commands/HireMe';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TypingMarkdown from './commands/TypingMarkdown';
import { getYearsOfExperience } from '../services/util';

const posts = {
  'post-1': {
    title: 'Demystifying Microservice Architecture',
    file: '/microservices-architecture.md'
  },
  'post-2': {
    title: 'Scaling Node.js Applications (coming soon)',
    file: '/coming-soon.md'
  }
};

const Terminal = () => {
  const [history, setHistory] = useState([
    {
      cmd: '',
      output: (
        <div>
          <pre style={{ color: '#00ffcc' }}>
{`
 _  __           _     _     _               _       _       
| |/ /__ _ _ __ (_)___| |__ | | __          | | __ _(_)_ __  
| ' // _\` | '_ \\| / __| '_ \\| |/ /       _  | |/ _\` | | '_ \\ 
| . \\ (_| | | | | \\__ \\ | | |   <       | |_| | (_| | | | | |
|_|\\_\\__,_|_| |_|_|___/_| |_|_|\\_\\       \\___/ \\__,_|_|_| |_| 
`}
          </pre>
          <TypingMarkdown
            content={`Hi, I'm Kanishk Jain — a Backend Engineer and Team Lead with ${getYearsOfExperience()} years of experience.
I specialize in building scalable microservices, leading cross-functional teams,
and integrating cutting-edge AI technologies to drive product growth.`}
          />
          <pre>
Type 'help' to see available commands.
          </pre>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef(null);
  const navigate = useNavigate();

  const handleCommand = async (input) => {
    const cmd = input.trim().toLowerCase();
    let output = null;

    if (cmd.startsWith('open ')) {
      const postKey = cmd.split(' ')[1];
      if (posts[postKey]) {
        navigate(`/post/${postKey}`);
        return;
      } else {
        output = <p>Blog post not found: {postKey}</p>;
      }
    } else {
      switch (cmd) {
        case 'whoami':
          output = <Whoami />;
          break;
        case 'skills':
          output = <Skills />;
          break;
        case 'experience':
          output = (
            <SyntaxHighlighter language="bash" style={atomOneDark}>
{`Experience:

# inFeedo Tech Pvt. Ltd (04/2022 – Present)
## Team Lead - Backend Engineering
- Built AI assistant using RAG, OpenAI, Pinecone
- Migrated monolith to microservices (30% less downtime)
- Led a team of 6 engineers
- Improved HR metrics delivery by 25%

# inFeedo Tech Pvt. Ltd (08/2019 – 03/2022)
## Senior Software Engineer - Backend
- Optimized analytics dashboard (20% UX improvement)
- Enabled global expansion, added new modules

# Posist Technologies (12/2015 – 07/2019)
## Engineering Team Member
- Built inventory module for 100+ clients
- Enhanced reporting and decision analytics`}
            </SyntaxHighlighter>
          );
          break;
        case 'blog':
          output = (
            <pre>
{`Available Blog Posts:
  post-1 - Demystifying Microservice Architecture
  post-2 - Scaling Node.js Applications (coming soon)

Type 'open post-1' to read a blog.`}
            </pre>
          );
          break;
        case 'social':
          output = <Social />;
          break;
        case 'sudo hire-me':
          output = <HireMe />;
          break;
        case 'help':
          output = (
            <pre>
{`Available Commands:
  whoami       - About me
  skills       - Technologies I know
  experience   - My professional experience
  blog         - Read my articles
  social       - Find me online
  sudo hire-me - Why you should hire me 🚀
  open <post>  - Open a blog post (e.g., open post-1)`}
            </pre>
          );
          break;
        default:
          output = <p>Command not found: {cmd}</p>;
      }
    }
    setHistory((prev) => [...prev, { cmd: input, output }]);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="terminal">
      {history.map((entry, idx) => (
        <div key={idx}>
          {entry.cmd && <p className="prompt">$ {entry.cmd}</p>}
          <div>{entry.output}</div>
        </div>
      ))}
      <Prompt onCommand={handleCommand} />
      <div ref={terminalEndRef} />
    </div>
  );
};

export default Terminal;