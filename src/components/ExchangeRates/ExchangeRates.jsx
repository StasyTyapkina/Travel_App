import React, { useState, useEffect, useContext } from 'react';
import { StyledWrapper, StyledText } from './styledExchangeRates';
import { LocaleContext } from '../Locale';

export default function ExchangeRates({ countryId }) {
  const [isLoaded, setLoadedStatus] = useState(false);
  const [localCurrAbbrev, setLocalCurrAbbrev] = useState('');
  const [localCurrName, setLocalCurrName] = useState('');
  const [countryExchangeRates, setCountryExchangeRates] = useState({});
  const { locale } = useContext(LocaleContext);
  const currenciesNames = {
    USD: {
      en: 'US Dollar',
      ru: 'Доллар США',
      de: 'US Dollar',
    },
    EUR: {
      en: 'Euro',
      ru: 'Евро',
      de: 'Euro',
    },
    RUB: {
      en: 'Russian Rouble',
      ru: 'Российский рубль',
      de: 'Russischer Rubel',
    },
  };
  useEffect(() => {
    fetch(`https://travel-srv.herokuapp.com/countries/id/${countryId}`)
      .then((countryDataResponse) => {
        if (!countryDataResponse.ok)
          throw new Error(countryDataResponse.statusText);
        return countryDataResponse.json();
      })
      .then((countryDataExtracted) => {
        setLocalCurrAbbrev(countryDataExtracted['country']['currency']);
        setLocalCurrName(
          countryDataExtracted['country']['currencyname'][locale]
        );
        fetch(`https://api.exchangerate.host/latest?base=${localCurrAbbrev}`)
          .then((allCurrenciesResponse) => {
            if (!allCurrenciesResponse.ok)
              throw new Error(allCurrenciesResponse.statusText);
            return allCurrenciesResponse.json();
          })
          .then((allCurrenciesExtracted) => {
            setCountryExchangeRates({
              USD: allCurrenciesExtracted['rates']['USD'].toFixed(2),
              EUR: allCurrenciesExtracted['rates']['EUR'].toFixed(2),
              RUB: allCurrenciesExtracted['rates']['RUB'].toFixed(2),
            });
          });
        setLoadedStatus(true);
      });
  }, [localCurrAbbrev, localCurrName, locale]);
  if (!isLoaded) {
    return null;
  } else {
    return (
      <StyledWrapper>
        <StyledText>
          1 {localCurrName} <br /> ⬇ <br /> {countryExchangeRates['USD']}{' '}
          {currenciesNames['USD'][locale]}
        </StyledText>
        <StyledText>
          1 {localCurrName} <br /> ⬇ <br /> {countryExchangeRates['EUR']}{' '}
          {currenciesNames['EUR'][locale]}
        </StyledText>
        <StyledText>
          1 {localCurrName} <br /> ⬇ <br /> {countryExchangeRates['RUB']}{' '}
          {currenciesNames['RUB'][locale]}
        </StyledText>
      </StyledWrapper>
    );
  }
}
