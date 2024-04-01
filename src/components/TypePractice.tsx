import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { dataStructures } from '../data/DataStructures';
import './TypePractice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';


const TypePractice: React.FC = () => {
  const [input, setInput] = useState('');
  const [selectedStructure, setSelectedStructure] = useState(Object.keys(dataStructures)[0]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [showStats, setShowStats] = useState(false); // Add a state to control the visibility of stats
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);


 
  
  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInput(newValue);
  
    // Set startTime on first character input if not already set
    if (!startTime && newValue.trim().length > 0) {
      const now = Date.now();
      setStartTime(now);
    }
  
    const targetText = dataStructures[selectedStructure].join('\n');
  
    if (newValue.trim() === targetText.trim() && startTime) {
      const now = Date.now();
      setEndTime(now); // Mark the end time when user finishes typing
      setShowStats(true); // Show stats overlay
    }
  };
  
  

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === "Tab") {
      event.preventDefault();
      const start = event.currentTarget.selectionStart ?? 0;
      const end = event.currentTarget.selectionEnd ?? 0;
      const newValue = `${input.substring(0, start)}    ${input.substring(end)}`;
      setInput(newValue);

      setTimeout(() => {
        textAreaRef.current?.setSelectionRange(start + 4, start + 4);
      }, 0);
    }
  };

  const handleSelectionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedStructure(event.target.value);
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setShowStats(false);
  };

  const restartTest = () => {
    setInput('');
    setStartTime(null);
    setEndTime(null); // Reset endTime for the new test
    setShowStats(false); // Hide the stats overlay
    textAreaRef.current?.focus(); // Refocus on the text area
  };
  
  // Render the stats overlay if the test is completed
  const renderStats = () => {
    if (endTime && startTime) {
      const elapsedTime = ((endTime - startTime) / 1000).toFixed(2);
      return (
        <div className="stats-overlay">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>Time: {elapsedTime} seconds</p>
            <button onClick={restartTest} className="restart-button" style={{ marginTop: '20px' }}>Restart</button>
          </div>
        </div>
      );
    }
  };

  const renderText = (): JSX.Element[] => {
    return dataStructures[selectedStructure].join('\n').split('').map((char, index) => {
      // Determine the class for each character
      let className = 'letter';
      if (index < input.length) {
        className += input[index] === char ? ' correct' : ' incorrect';
      }
      if (index === input.length) {
        className += ' current'; // Highlight the current position
      }
  
      return <span key={index} className={className}>{char}</span>;
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-800 px-4 py-8 md:px-8">
    <button
      onClick={() => setShowInstructions(!showInstructions)}
      className="mb-4 text-blue-500 hover:text-blue-700 cursor-pointer u font-bold"
      >
      -How to Play-
    </button>
    
    {showInstructions && (
      <div className="instructions-container mb-4 p-4 bg-gray-700 text-white rounded">
        <ul className="list-disc list-inside">
          <li>Type the given text as fast as you can until you complete the whole piece.</li>
          <li>Press "Enter" to go to a new line.</li>
          <li>Press "Tab" to insert four spaces.</li>
          <li>Accuracy must be 100%; spacing must be perfect as well.</li>
          <li>Use the dropdown to select different text Data Structure and Algorithms.</li>
          <li>Click over the text area and start typing, have fun!!</li>
        </ul>
      </div>
    )}
      {showStats && renderStats()}
      <div className="selection-container relative top-0 mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-30 p-4 mb-8"> 
        <div className="inline-block relative w-full">
        <select 
    onChange={handleSelectionChange} 
    value={selectedStructure}
    className="block w-full bg-gray-800 text-white py-2 pl-4 pr-10 rounded leading-tight focus:outline-none custom-select"
    >
    {Object.keys(dataStructures).map((structure) => (
      <option key={structure} value={structure} className="bg-gray-700">{structure}</option>
    ))}

  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
          </div>
        </div>
      </div>
      <div className="data-structure-container">
      <div className={`text-display bg-gray-900 p-4 text-white whitespace-pre-wrap overflow-auto ${input ? 'opacity-100' : 'opacity-50'}`}>
          {renderText()}
        </div>
        <textarea
          ref={textAreaRef}
          className="typing-area bg-transparent text-white p-4 outline-none resize-none w-full md:w-3/4 lg:w-1/2 mt-4 rounded"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          spellCheck="false"
        ></textarea>
      </div>
      <div className="fixed bottom-4 right-4 flex items-center">
        <a href="https://www.youtube.com/channel/@jkdmasta" target="_blank" rel="noopener noreferrer" className="mr-2">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-600 hover:text-red-700" />
        </a>
        <a href="https://github.com/NetJumper/TypeAlgoFE" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-300 hover:text-gray-400" />
        </a>
      </div>
    </div>
  );
  

};

export default TypePractice;
