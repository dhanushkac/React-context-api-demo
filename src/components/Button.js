import React from 'react';
import { ThemeConsumer } from '../context/ThemeContext';

const Button = () => {

  return <ThemeConsumer>
    {
      ({ toggleTheme }) => {
        return <button className="button" onClick={() => toggleTheme()}>Toggle Theme</button>;
      }
    }
  </ThemeConsumer>;
};

export default Button;