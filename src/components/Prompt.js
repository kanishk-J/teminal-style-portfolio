import React, { useState } from 'react';

const Prompt = ({ onCommand }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onCommand(input);
      setInput('');
    }
  };

  return (
    <div className="prompt-line">
      <span className="prompt-symbol">$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        className="prompt-input"
      />
    </div>
  );
};

export default Prompt;
