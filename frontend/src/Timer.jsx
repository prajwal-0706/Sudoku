import React, { useState, useEffect } from 'react';

function Timer() {
  const [inputTime, setInputTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      alert('Time is up!');
      setIsRunning(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isRunning, remainingTime]);

  const startTimer = () => {
    setRemainingTime(inputTime);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <label>Set Time (in seconds):</label>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(parseInt(e.target.value))}
        />
      </div>
      <div className="time">{remainingTime}</div>
      <button onClick={startTimer} disabled={isRunning || inputTime <= 0}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}

export default Timer;
