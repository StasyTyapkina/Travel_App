import React, { useState, useEffect, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledText, StyledTitle } from './styledWeather';
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/ru';
import { LocaleContext } from '../Locale';

function Weather({ location }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countryWeather, setCountryWeather] = useState([]);
  const { locale } = useContext(LocaleContext);
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=${locale}&appid=7a0b8eea220bfcc26659b2bde7fcd57b&units=metric`;

  const [time, setTime] = useState(
    moment()
      .utcOffset(countryWeather.timezone / 60)
      .locale(`${locale}`)
      .format('dddd, D MMMM YYYY, HH:mm:ss')
  );

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [countryWeather.timezone, time, countryWeather, tick]);

  function tick() {
    setTime(
      moment()
        .utcOffset(countryWeather.timezone / 60)
        .locale(`${locale}`)
        .format(`dddd, D MMMM YYYY, HH:mm:ss`)
    );
  }

  useEffect(() => {
    fetch(APIUrl)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setCountryWeather(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [APIUrl]);

  const { temp, description, icon } = useMemo(() => {
    const [weather] = countryWeather.weather || [];
    return {
      temp:
        countryWeather.main && countryWeather.main.temp
          ? Math.round(countryWeather.main.temp).toString()
          : '',
      description: weather ? weather.description : '',
      icon: weather
        ? `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
        : '',
    };
  }, [countryWeather]);

  if (error) {
    console.log('ERROR', error.message);
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <StyledWrapper>
          <img src={icon} alt="weather status icon" />
          <StyledTitle>{countryWeather.name}</StyledTitle>
          <StyledText>{temp} &#8451;</StyledText>
          <StyledText>{description}</StyledText>
        </StyledWrapper>
        <StyledWrapper>
          <StyledText>{time}</StyledText>
        </StyledWrapper>
      </>
    );
  }
}

Weather.defaultProps = {
  location: '',
};

Weather.propTypes = {
  location: PropTypes.string,
};

export default Weather;
