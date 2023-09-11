import React, { useState, useEffect } from 'react';
import Timer from './components/Time/Timer';
import Stopwatch from './components/Time/StopWatch';

const App = () => {
  return (
    <>
      <Timer />
      <Stopwatch />
    </>
  );
};

export default App;
