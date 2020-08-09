import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import WelcomeMessage from './components/WelcomeMessage';
import { LocaleProvider } from './context/LocaleContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  const [locale, setLocale] = useState('en');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <LocaleProvider value={{ locale, setLocale }}>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div>
          <Menu>
            <MenuItem />
          </Menu>
          <WelcomeMessage />
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
