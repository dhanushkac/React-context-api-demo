import React from 'react';
import { LocaleConsumer } from '../context/LocaleContext';
import Button from './Button';

const MenuItem = () => {
  return <LocaleConsumer>
    {
      ({ setLocale }) => <div>
        <select className="select" onChange={(e) => setLocale(e.target.value)}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="sw">SW</option>
        </select>
        <Button />
      </div>
    }
  </LocaleConsumer>;
};

export default MenuItem;