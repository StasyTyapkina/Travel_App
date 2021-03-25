import React from 'react';
import { StyledMain, StyledVideo, StyledSlider } from './styledMain';
import HandleCarousel from './handleCarousel/HandleCarousel';
import Header from '../../Header/Header';
import PropTypes from 'prop-types';

export default function Main({
  searchTerm,
  setSearchTerm,
  setCountry,
  setCapital,
  userInfo,
  setUserInfo,
}) {
  return (
    <StyledMain>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <StyledVideo src="video/video_main.mp4" autoPlay loop muted />
      <StyledSlider>
        <HandleCarousel setCountry={setCountry} setCapital={setCapital} />
      </StyledSlider>
    </StyledMain>
  );
}
Main.defaultProps = {
  searchTerm: '',
  setSearchTerm: () => {},
  setCountry: () => {},
  setCapital: () => {},
  userInfo: {},
  setUserInfo: () => {},
};

Main.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setCountry: PropTypes.func,
  setCapital: PropTypes.func,
  userInfo: PropTypes.object,
  setUserInfo: PropTypes.func,
};
