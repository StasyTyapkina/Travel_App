import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CountryCards from './CountryCard';
import PropTypes from 'prop-types';
import {
  StyledMainCountry,
  StyledVideo,
} from '../App/mainPageComponents/styledMain';

import MediaContent from './MediaContent';

export default function CountryPage({
  countryId,
  capital,
  userInfo,
  setUserInfo,
}) {
  return (
    <>
      <StyledMainCountry>
        <Header
          hasSearchField={false}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <StyledVideo src="video/video_country.mp4" autoPlay loop muted />
        <CountryCards countryId={countryId} capital={capital} />
        <MediaContent
          countryId={countryId}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <Footer />
      </StyledMainCountry>
    </>
  );
}

CountryPage.defaultProps = {
  countryId: '',
  capital: '',
  userInfo: {},
  setUserInfo: () => {},
};
CountryPage.propTypes = {
  countryId: PropTypes.string,
  capital: PropTypes.string,
  userInfo: PropTypes.object,
  setUserInfo: PropTypes.func,
};
