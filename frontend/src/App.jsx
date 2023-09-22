import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './components/Time/Timer';
import Stopwatch from './components/Time/StopWatch';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

const App = () => {
  return (
    <>
      <div className="fixedDiv"></div>
      <Timer />
      <Stopwatch />
      <ThemeSwitcher />
    </>
  );
};

export default App;
