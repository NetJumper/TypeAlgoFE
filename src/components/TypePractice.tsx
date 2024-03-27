import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { dataStructures } from '../data/DataStructures';
import './TypePractice.css';

const TypePractice: React.FC = () => {
  // State variables
  const [input, setInput] = useState<string>(''); // User's typing input
  const [selectedStructure, setSelectedStructure] = useState<string>(Object.keys(dataStructures)[0]); // Currently selected data structure
  const [gameStarted, setGameStarted] = useState<boolean>(false); // Whether the game has started
  const [startTime, setStartTime] = useState<number | null>(null); // Start time of the game
  const [elapsedTime, setElapsedTime] = useState<number>(0); // Elapsed time since the game started
  const [wpm, setWpm] = useState<number>(0); // Words per minute
  const [accuracy, setAccuracy] = useState<number>(100); // Typing accuracy
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null); // Reference to the textarea element
  const targetText: string = dataStructures[selectedStructure].join('\n'); // Text user needs to type
  const [testCompleted, setTestCompleted] = useState<boolean>(false); // Whether the test is completed
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null); // Reference to the timer interval

  // Starts a new test
const startNewTest = () => {
  setGameStarted(true);
  setTestCompleted(false);
  setInput('');
  setStartTime(Date.now());
  setElapsedTime(0);
  setWpm(0);
  setAccuracy(100);
    // Ensure the textarea is focused for typing
  if (textAreaRef.current) {
    textAreaRef.current.focus();
  }
};


  // Resets the test
const resetTest = () => {
  setGameStarted(false);
  setTestCompleted(false);
  setInput('');
  setStartTime(null);
  setElapsedTime(0);
  setWpm(0);
  setAccuracy(100);    
};



// Adds a keydown event listener to start the game on any key press
useEffect(() => {
  // Define the event listener that checks the event type
  const startGameOnAnyKey = (event: Event) => {
    // Check if the event type is 'keydown'
    if (event.type === 'keydown') {
      // It's safe to proceed knowing this is a keyboard event
      if (!gameStarted && !testCompleted) {
        setGameStarted(true);
        event.preventDefault(); // Prevent default action
        textAreaRef.current?.focus(); // Focus the textarea
      }
    }
  };
  document.addEventListener('keydown', startGameOnAnyKey);
  return () => document.removeEventListener('keydown', startGameOnAnyKey);
}, [gameStarted, testCompleted, textAreaRef]);




useEffect(() => {
  return () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };
}, []);

// Sets up and cleans up the timer interval
useEffect(() => {
  if (gameStarted && !testCompleted) {
    // Only set the start time once when the game starts
    if (startTime === null) {
      setStartTime(Date.now());
    }

    // Start or restart the timer
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    timerIntervalRef.current = setInterval(() => {
      updateTimerAndWPM();
    }, 100); // Update every 100 milliseconds
  } else if (testCompleted && timerIntervalRef.current) {
    clearInterval(timerIntervalRef.current);
  }
  return () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };
}, [gameStarted, testCompleted, startTime, input]);

// Function to update timer and WPM, separated for clarity
const updateTimerAndWPM = () => {
  const now = Date.now();
  const elapsedTimeInSeconds = (now - (startTime ?? now)) / 1000;
  setElapsedTime(elapsedTimeInSeconds);

  // Update WPM only if the user has started typing
  if (input.length > 0) {
    const wordCount = input.trim().split(/\s+/).length;
    setWpm((wordCount / elapsedTimeInSeconds) * 60);
  }

  
};

  // Handles keydown events for Tab and Enter in the textarea
const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab' || e.key === 'Enter') {
      e.preventDefault();
      const cursorPosition: number | undefined = e.currentTarget.selectionStart;
      const valueToAdd: string = e.key === 'Tab' ? '    ' : '\n';
      const updatedInput: string = input.slice(0, cursorPosition) + valueToAdd + input.slice(cursorPosition);
      setInput(updatedInput);

      setTimeout(() => {
        if (textAreaRef.current && cursorPosition !== undefined) {
          textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd = cursorPosition + valueToAdd.length;
        }
      }, 0);
    }
  };

  // Handles changes in the textarea and checks for test completion
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInput(value);

    // Ensure selectedStructure exists in dataStructures and has content before comparing lengths
    if (dataStructures[selectedStructure]) {
        const targetText = dataStructures[selectedStructure].join('\n');

        // Show completion overlay if end is reached, regardless of correctness
        if (value.length >= targetText.length && !testCompleted) {
            setGameStarted(false);
            setTestCompleted(true);
            // Stop the timer
            const endTime = Date.now();
            if (startTime) {
                const elapsedTimeInSeconds = (endTime - startTime) / 1000;
                setElapsedTime(elapsedTimeInSeconds);
                const wordCount = value.trim().split(/\s+/).length;
                setWpm((wordCount / elapsedTimeInSeconds) * 60);
                const correctChars = value.split('').filter((char, index) => char === targetText[index]).length;
                setAccuracy((correctChars / targetText.length) * 100);
            }
        }
    } else {
        console.error('Selected structure does not exist in dataStructures:', selectedStructure);
    }
};

  
// Handles the change of the selected data structure or algorithm
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Update the selected structure to the new value
    setSelectedStructure(e.target.value);
    // Reset input, start time, and flags to prepare for a new test
    setInput('');
    setStartTime(null);
    setGameStarted(false);
    setTestCompleted(false);
    resetTest();
  };

  // Effect hook to focus the textarea when the game starts
  useEffect(() => {
    if (gameStarted) {
    // If the game has started, focus the textarea to allow immediate typing
    textAreaRef.current?.focus();
    }
  }, [gameStarted]);

  // Effect hook to ensure the textarea is focused after any pending updates
  useEffect(() => {
    if (gameStarted) {
      setTimeout(() => {
        textAreaRef.current?.focus();
      }, 0); // using setTimeout to ensure this runs after all pending render logic
    }
  }, [gameStarted]);

// Function to render the target text for typing
const renderText = () => {
  // Split the target text into individual characters for granular styling
  return targetText.split('').map((char: string, index: number) => {
    const isCurrentIndex = index === input.length; // Check if the current character is at the typing position
    let className = 'letter'; // Base class for all characters
    if (input[index] === char) {
      className += ' correct'; // Add 'correct' class for correctly typed characters
    } else if (index < input.length) {
      className += ' incorrect'; // Add 'incorrect' class for wrongly typed characters
    }
    if (isCurrentIndex) {
      className += ' current'; // Highlight the current typing position
    }

    return <span key={index} className={className}>{char}</span>; // Return a span element for each character
  });
};

// Effect hook to check for completion of the typing test
useEffect(() => {
  // Check if the input matches the target text exactly and the test hasn't been marked as completed
  if (input.trim() === targetText.trim() && !testCompleted) {
    console.log("Completion Detected");
    // Mark the game as not started and completed to stop further typing
    setGameStarted(false);
    setTestCompleted(true);

    // Calculate final statistics
    const endTime = Date.now();
    if (startTime) {
      const elapsedTimeInSeconds = (endTime - startTime) / 1000; // Calculate elapsed time
      setElapsedTime(elapsedTimeInSeconds);
      const wordCount = input.trim().split(/\s+/).length; // Calculate word count
      setWpm((wordCount / elapsedTimeInSeconds) * 60); // Calculate words per minute
      const correctChars = input.split('').filter((char, index) => char === targetText[index]).length; // Calculate accuracy
      setAccuracy((correctChars / targetText.length) * 100); // Calculate accuracy percentage
    }
  }
}, [input, targetText, testCompleted, startTime]);
  

  return (
    // Main container for the application
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-800 p-4">
      {!testCompleted && (
        <div className="selection-container relative top-0 mx-auto w-full max-w-xs z-30 p-4">
          <select
            onChange={handleSelectionChange}
            value={selectedStructure}
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
          >
            {Object.keys(dataStructures).map((key) => (
              <option key={key} value={key} className="bg-gray-700 text-white">
                {key}
              </option>
            ))}
          </select>
        </div>
      )}
      {testCompleted ? (   
        // When the test is completed, show a completion overlay
        <div className="completion-overlay flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Time: {elapsedTime.toFixed(2)} seconds</p>
            <p>WPM: {wpm.toFixed(2)}</p>
            <p>Accuracy: {accuracy.toFixed(2)}%</p>
            <button
              onClick={startNewTest} 
              className="mt-4 bg-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            > 
              Try Again 
            </button>
          </div> 
        </div>
      ) : ( 
        <>
          <div className="data-structure-container">
            <div className={`text-display bg-gray-900 p-4 text-white whitespace-pre-wrap overflow-auto ${!gameStarted ? 'opacity-50' : 'opacity-100'}`}>
              {renderText()} 
            </div>
            {gameStarted && (
              <textarea
                ref={textAreaRef}
                className="typing-area bg-transparent text-white p-4 outline-none resize-none"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                spellCheck={false}
              />
            )}
          </div>
          {!gameStarted && ( 
            // Start screen over with a button to begin test.
            <div className="start-screen-overlay flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10">
              <h1 className="text-white text-3xl mb-4">Click to</h1>
              <button
                onClick={() => setGameStarted(true)}
                className="bg-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
              >
                Start
              </button>
            </div>
          )}
          {gameStarted && (
            //Display typing stats when the game is started.
            <div className="stats top-0 right-0 m-4 z-20">
              <div>Time: {elapsedTime.toFixed(2)}s</div>
              <div>WPM: {wpm.toFixed(2)}</div>
              <div>Accuracy: {accuracy.toFixed(2)}%</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TypePractice;