import React from 'react';
import languageProvider from '../util/LanguageProvider';
import { LocaleConsumer } from '../context/LocaleContext';

const WelcomeMessage = () => {
  return <LocaleConsumer>
    {
      ({ locale }) => {
        return <div className="jumbotron">
          {languageProvider('HELLO', locale)}
        </div>;
      }
    }
  </LocaleConsumer>;
};

export default WelcomeMessage;