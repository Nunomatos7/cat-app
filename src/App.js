import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import CatList from './CatApp1/CatList';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <CatList />
    </ThemeProvider>
  );
};

export default App;
