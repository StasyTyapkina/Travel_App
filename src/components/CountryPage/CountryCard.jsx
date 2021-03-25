import React, { useState, useEffect, useMemo, useContext } from 'react';
import { StyledLoader } from '../App/mainPageComponents/loader.js';
import {
  StyledContent,
  StyledContainer,
  StyledWrapper,
  StyledContainerInner,
  StyledFigure,
  StyledInfo,
  StyledCardText,
  StyledImg,
  StyledTextContent,
  StyledItems,
  StyledWidget,
} from './styledCountry.js';
import Weather from '../Weather/WeatherTime';
import { LocaleContext } from '../Locale';
import ExchangeRates from '../ExchangeRates/ExchangeRates';

function CountryCards({ countryId, capital }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItems] = useState([]);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    fetch(`https://travel-srv.herokuapp.com/countries/id/${countryId}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.country);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const { image, description, country, cap } = useMemo(() => {
    return {
      country: item ? item.country?.[locale] : '',
      cap: item ? item.capital?.[locale] : '',
      image: item ? item.image : '',
      description: item ? item.description?.[locale] : '',
    };
  }, [item, locale]);

  if (error) {
    console.log('ERROR', error.message);
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    return (
      <StyledContent>
        <StyledContainer>
          <StyledContainerInner>{country}</StyledContainerInner>
          <StyledWrapper>
            <StyledItems>
              <StyledInfo>
                <StyledFigure data-category={cap}>
                  <StyledImg src={image} />
                </StyledFigure>
                <StyledTextContent>
                  <StyledCardText>{description}</StyledCardText>
                </StyledTextContent>
              </StyledInfo>
              <StyledWidget>
                <Weather location={capital} />
                <ExchangeRates countryId={countryId} />
              </StyledWidget>
              <StyledWidget></StyledWidget>
            </StyledItems>
          </StyledWrapper>
        </StyledContainer>
      </StyledContent>
    );
  }
}

export default CountryCards;
