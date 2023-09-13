import React, { useState, useEffect } from 'react';
import Stopwatch from './StopWatch';
import Timer from './Timer';

const App = () => {
  return (
    <>
      <Timer />
      <Stopwatch />
    </>
  );
};

export default App;
