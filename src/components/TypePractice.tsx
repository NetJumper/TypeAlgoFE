import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { dataStructures } from '../data/DataStructures';
import './TypePractice.css';

const TypePractice: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [selectedStructure, setSelectedStructure] = useState<string>(Object.keys(dataStructures)[0]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const targetText: string = dataStructures[selectedStructure].join('\n');
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

const resetTest = () => {
  setGameStarted(false);
  setTestCompleted(false);
  setInput('');
  setStartTime(null);
  setElapsedTime(0);
  setWpm(0);
  setAccuracy(100);    
};




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

  // Add the event listener
  document.addEventListener('keydown', startGameOnAnyKey);

  // Cleanup: remove the event listener on unmount
  return () => document.removeEventListener('keydown', startGameOnAnyKey);
}, [gameStarted, testCompleted, textAreaRef]);




useEffect(() => {
  // Clear interval when component unmounts to prevent memory leaks
  return () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };
}, []);

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
    }, 100); // Update every 100 milliseconds for a smoother timer
  } else if (testCompleted && timerIntervalRef.current) {
    // Clear the timer interval when the test is completed
    clearInterval(timerIntervalRef.current);
  }

  // Clean up the interval on component unmount or game reset
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

  // Also consider updating accuracy here if it needs to be dynamically updated
};




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

  

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStructure(e.target.value);
    setInput('');
    setStartTime(null);
    setGameStarted(false);
    setTestCompleted(false);
    resetTest();
  };
  useEffect(() => {
    if (gameStarted) {
      // Ensure that the text area is focused right after the game starts
      textAreaRef.current?.focus();
    }
  }, [gameStarted]);
  useEffect(() => {
    if (gameStarted) {
      setTimeout(() => {
        textAreaRef.current?.focus();
      }, 0); // using setTimeout to ensure this runs after all pending render logic
    }
  }, [gameStarted]);

  const renderText = () => {
    return targetText.split('').map((char: string, index: number) => {
      const isCurrentIndex: boolean = index === input.length;
      let className: string = 'letter';
      if (input[index] === char) {
        className += ' correct';
      } else if (index < input.length) {
        className += ' incorrect';
      }
      if (isCurrentIndex) {
        className += ' current';
      }

      return <span key={index} className={className}>{char}</span>;
    });
  };

  useEffect(() => {
    // Check if the entire input matches the target text exactly after updating the input state
    if (input.trim() === targetText.trim() && !testCompleted) {
      console.log("Completion Detected");
      setGameStarted(false);  // Stops accepting input
      setTestCompleted(true); // Triggers the completion screen
  
      // Calculate final stats and stop the timer
      const endTime = Date.now();
      if (startTime) {
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        setElapsedTime(elapsedTimeInSeconds);
        const wordCount = input.trim().split(/\s+/).length;
        setWpm((wordCount / elapsedTimeInSeconds) * 60);
        const correctChars = input.split('').filter((char, index) => char === targetText[index]).length;
        setAccuracy((correctChars / targetText.length) * 100);
      }
    }
  }, [input, targetText, testCompleted, startTime]);
  




  

  return (
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
        <div className="completion-overlay flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Time: {elapsedTime.toFixed(2)} seconds</p>
            <p>WPM: {wpm.toFixed(2)}</p>
            <p>Accuracy: {accuracy.toFixed(2)}%</p>
            <button
              onClick={startNewTest} // Assuming you have defined this function based on the previous instructions
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
            <div className="start-screen-overlay flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10">
              <h1 className="text-white text-3xl mb-4">Click to Start</h1>
              <button
                onClick={() => setGameStarted(true)}
                className="bg-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50"
              >
                Start
              </button>
            </div>
          )}
          {gameStarted && (
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