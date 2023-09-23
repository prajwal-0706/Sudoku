import React, { useEffect, useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const themeSwitcher = () => {
    setToggleTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`toggleContainer ${toggleTheme && 'active'}`}>
      <div className="toggle" onClick={themeSwitcher}>
        <span className="toggle-handler">
          <span className="crater crater-1"></span>
          <span className="crater crater-2"></span>
          <span className="crater crater-3"></span>
        </span>
        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
        <span className="star star-6"></span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
