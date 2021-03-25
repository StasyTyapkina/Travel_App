import React, { useState } from 'react';
import Cards from '../App/mainPageComponents/cardComponents/Cards';
import Main from '../App/mainPageComponents/Main';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

function Home({ setCountry, setCapital, userInfo, setUserInfo }) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Main
        setCountry={setCountry}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCapital={setCapital}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <Cards
        setCountry={setCountry}
        searchTerm={searchTerm}
        setCapital={setCapital}
      />
      <Footer />
    </>
  );
}

Home.defaultProps = {
  setCountry: () => {},
  setCapital: () => {},
  userInfo: {},
  setUserInfo: () => {},
};
Home.propTypes = {
  setCountry: PropTypes.func,
  setCapital: PropTypes.func,
  userInfo: PropTypes.object,
  setUserInfo: PropTypes.func,
};

export default Home;
