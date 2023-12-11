import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

const LARGE_NUMBER = 1000000000;

function App() {
  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState('dark');
  const [currentList, setList] = useState([]);

  const testFunction = useCallback(() => {
    return [value * 3, value * 4];
  }, [value]);

  const delayFunction = useMemo(() => {
    console.log('Delay Function Ran');
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return value + 2;
  }, [value]);

  useEffect(() => {
    console.log('Callback Function was called');
  }, [testFunction]);

  useEffect(() => {
    if (dark) {
      setThemeName('dark');
    } else {
      setThemeName('light');
    }
  }, [dark]);

  const handleClick = () => {
    setTheme(!dark);
  };

  const handleChangeValue = () => {
    setValue(value + 1);
  };

  const handleList = () => {
    setList(testFunction);
  };

  const styleTheme = {
    backgroundColor: dark ? 'black' : '#ccc7c7',
    color: dark ? 'white' : 'black',
  };

  return (
    <div className="app-container" style={styleTheme}>
      <button onClick={handleClick} className="theme-button">
        {themeName}
      </button>
      <h1>{value}</h1>
      <button onClick={handleChangeValue} className="action-button">
        Change Value
      </button>
      <button onClick={handleList} className="action-button">
        Show List
      </button>
      <h2>{delayFunction}</h2>
      <div>
        {currentList.map((item, index) => {
          return (
            <h2 key={index} className="list-item">
              {item}
            </h2>
          );
        })}
      </div>
    </div>
  );
}

export default App;
