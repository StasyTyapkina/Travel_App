import React, { useState } from 'react';
import Home from '../pages/Home';
import CountryPage from '../CountryPage/CountryPage';
import Locale from '../Locale';

const App = () => {
  const [selectedCountry, setCountry] = useState('');
  const [selectedCapital, setCapital] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  if (selectedCountry === '') {
    return (
      <>
        <Locale>
          <Home
            setCountry={setCountry}
            setCapital={setCapital}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Locale>
      </>
    );
  } else {
    return (
      <>
        <Locale>
          <CountryPage
            countryId={selectedCountry}
            capital={selectedCapital}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Locale>
      </>
    );
  }
};
export default App;
