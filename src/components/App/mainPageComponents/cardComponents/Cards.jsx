import React, { useState, useEffect, useContext } from 'react';
import CardItem from './CardItem';
import {
  StyledCards,
  StyledContainer,
  StyledWrapper,
  StyledItems,
  StyledContainerInner,
  NoMatchedCountryHeading,
} from './styledCards';
import { StyledLoader } from '../loader';
import { langText } from '../lang';
import { LocaleContext } from '../../../Locale';

function Cards({ searchTerm, setCountry, setCapital }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFiltered] = useState([]);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_APIURL + '/countries')
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.countries);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  useEffect(() => {
    let currentItems = [],
      newList;
    if (searchTerm !== '') {
      currentItems = items;
      newList = currentItems.filter((item) => {
        const lCapital = item.capital[locale].toLowerCase();
        const lCountry = item.country[locale].toLowerCase();
        const filter = searchTerm.toLowerCase();
        return lCapital.includes(filter) || lCountry.includes(filter);
      });
    } else {
      newList = items;
    }
    setFiltered(newList);
  }, [items, searchTerm]);

  const cards = filteredItems.map((item) => (
    <CardItem
      key={item._id}
      src={item.image}
      capital={item.capital[locale]}
      text={item.text[locale]}
      country={item.country[locale]}
      setCountry={setCountry}
      setCapital={setCapital}
      countryId={item._id}
    />
  ));

  if (error) {
    console.log('ERROR', error.message);
  } else if (!isLoaded) {
    return <StyledLoader>Loading...</StyledLoader>;
  } else {
    return (
      <StyledCards>
        <StyledContainer>
          <StyledContainerInner>
            {langText[locale].tagline}
          </StyledContainerInner>
          <StyledWrapper>
            <StyledItems>
              {cards.length ? (
                cards
              ) : (
                <NoMatchedCountryHeading>
                  {langText[locale].noCountry} &#128521;
                </NoMatchedCountryHeading>
              )}
            </StyledItems>
          </StyledWrapper>
        </StyledContainer>
      </StyledCards>
    );
  }
}

export default Cards;
