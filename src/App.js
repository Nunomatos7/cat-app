import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import CatList1 from './CatApp1/CatList';
import CatList2 from './CatApp2/CatList';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyles />
        <Header>
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <nav>
            <NavLink to="/" end>
              CatApp 1
            </NavLink>
            <NavLink to="/catapp2">CatApp 2</NavLink>
          </nav>
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<CatList1 />} />
            <Route path="/catapp2" element={<CatList2 />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid #ccc;

  nav {
    display: flex;
    gap: 15px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.text};
      transition: color 0.3s ease;

      &.active {
        color: #3498db;
      }

      &:hover {
        color: #6a11cb;
      }
    }
  }

  button {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #6a11cb;
      color: #fff;
    }
  }
`;

const Main = styled.main`
  padding: 20px;
`;

export default App;
