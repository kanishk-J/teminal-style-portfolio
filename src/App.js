import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal';
import BlogPost from './components/commands/BlogPost';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="/post/:postId" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;