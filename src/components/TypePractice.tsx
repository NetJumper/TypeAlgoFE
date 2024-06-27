import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { dataStructures } from '../data/DataStructures';
import './TypePractice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Leaderboard from './Leaderboard';
import PersonalBest from './PersonalBest';
import { API, graphqlOperation } from 'aws-amplify';
import { createAttempt } from '../graphql/mutations';

const TypePractice: React.FC = () => {
  const [input, setInput] = useState('');
  const [selectedStructure, setSelectedStructure] = useState(Object.keys(dataStructures)[0]);
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [showStats, setShowStats] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const currentUser = { id: 'currentUserId', signUpId: 'currentSignUpId' };

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInput(newValue);

    if (!startTime && newValue.trim().length > 0) {
      const now = Date.now();
      setStartTime(now);
    }

    const targetText = selectedParts.flatMap(part => dataStructures[selectedStructure].parts[part]).join('\n');

    if (newValue.length >= targetText.length && startTime) {
      const now = Date.now();
      setEndTime(now);
      setShowStats(true);
      saveAttempt(newValue.length / ((now - startTime) / 1000 / 60), calculateAccuracy());
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Tab') {
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

  const handleStructureChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedStructure(event.target.value);
    setSelectedParts([]);
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setShowStats(false);
  };

  const handlePartsChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const options = event.target.options;
    const selected: string[] = [];
    Array.from(options).forEach((option) => {
      if (option.selected) {
        selected.push(option.value);
      }
    });
    setSelectedParts(selected);
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setShowStats(false);
  };

  const restartTest = () => {
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setShowStats(false);
    textAreaRef.current?.focus();
  };

  const calculateWPM = (): number => {
    if (startTime && endTime) {
      const wordsTyped = input.split(' ').length;
      const elapsedMinutes = (endTime - startTime) / (1000 * 60);
      return Math.round(wordsTyped / elapsedMinutes);
    }
    return 0;
  };

  const calculateAccuracy = (): number => {
    const targetText = selectedParts.flatMap(part => dataStructures[selectedStructure].parts[part]).join('\n');
    let correctCharacters = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === targetText[i]) {
        correctCharacters++;
      }
    }
    return (correctCharacters / targetText.length) * 100;
  };

  const saveAttempt = async (wpm: number, accuracy: number) => {
    try {
      await API.graphql({
        query: createAttempt,
        variables: {
          input: {
            userId: currentUser.id,
            wpm,
            accuracy,
            createdAt: new Date().toISOString()
          }
        }
      });
    } catch (error) {
      console.error('Error saving attempt:', error);
    }
  };

  const renderStats = () => {
    if (endTime && startTime) {
      const elapsedTime = ((endTime - startTime) / 1000).toFixed(2);
      const wpm = calculateWPM();
      const accuracy = calculateAccuracy();
      const cpm = (input.length / ((endTime - startTime) / 1000 / 60)).toFixed(2);

      const targetText = selectedParts.flatMap(part => dataStructures[selectedStructure].parts[part]).join('\n');
      const totalErrors = input.length - (accuracy * targetText.length / 100);

      return (
        <div className="stats-overlay">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>Time: {elapsedTime} seconds</p>
            <p>WPM: {wpm}</p>
            <p>CPM: {cpm}</p>
            <p>Accuracy: {accuracy.toFixed(2)}%</p>
            <p>Total Errors: {totalErrors.toFixed(2)}</p>
            <button onClick={restartTest} className="restart-button" style={{ marginTop: '20px' }}>Restart</button>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderText = (): JSX.Element[] => {
    const text = selectedParts.flatMap(part => dataStructures[selectedStructure].parts[part]).join('\n');
    return text.split('').map((char, index) => {
      let className = 'letter';
      if (index < input.length) {
        className += input[index] === char ? ' correct' : ' incorrect';
      }
      if (index === input.length) {
        className += ' current';
      }
      return <span key={index} className={className}>{char}</span>;
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-800 px-4 py-8 md:px-8">
      <div className="w-full flex justify-between">
        <Leaderboard dataStructure={selectedStructure} />
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="mb-4 text-blue-500 hover:text-blue-700 cursor-pointer u font-bold"
        >
          -How to Play-
        </button>
        <PersonalBest signUpId={currentUser.signUpId} dataStructure={selectedStructure} />
      </div>
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
            onChange={handleStructureChange}
            value={selectedStructure}
            className="block w-full bg-gray-800 text-white py-2 pl-4 pr-10 rounded leading-tight focus:outline-none custom-select"
          >
            {Object.keys(dataStructures).map((structure) => (
              <option key={structure} value={structure} className="bg-gray-700">{dataStructures[structure].name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <select
          multiple
          onChange={handlePartsChange}
          className="block w-full bg-gray-800 text-white py-2 pl-4 pr-10 rounded leading-tight focus:outline-none custom-select mt-2"
        >
          {Object.keys(dataStructures[selectedStructure].parts).map((part) => (
            <option key={part} value={part} className="bg-gray-700">{part}</option>
          ))}
        </select>
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
