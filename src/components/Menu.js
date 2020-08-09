import React from 'react';
import { ThemeConsumer } from '../context/ThemeContext';

const Menu = ({ children }) => {
  return <ThemeConsumer>
    {
      ({ theme }) => {
        return <div className={`navbar-${theme}`}>
          <div className="navbar-brand">Context Tute</div>
          <div className="navbar-content">
            {children}
          </div>
        </div>;
      }
    }
  </ThemeConsumer>;
};

export default Menu;