import { useState, useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_LOCALE } from '../../constants';

const LocaleContext = createContext(DEFAULT_LOCALE);

const Locale = ({ children }) => {
  let storedLang = JSON.parse(localStorage.getItem('LanguageInLocalStorage'));

  const value = useContext(LocaleContext);
  const [currentLocale, setCurrentLocale] = useState(storedLang || value);

  const setLocale = (event) => {
    setCurrentLocale(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem(
      'LanguageInLocalStorage',
      JSON.stringify(currentLocale)
    );
  }, [currentLocale]);

  return (
    <LocaleContext.Provider value={{ locale: currentLocale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

Locale.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { LocaleContext };

export default Locale;
