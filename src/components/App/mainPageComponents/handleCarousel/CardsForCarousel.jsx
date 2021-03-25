import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  StyledCarousel,
  StyledInfo,
  StyledTitleLarge,
  StyledSubtitle,
  StyledButton,
  StyledImg,
  StyledFigure,
  StyledLink,
} from './StyledCardsForCarousel';
import { langText } from '../lang';
import { LocaleContext } from '../../../Locale';

function CardsForCarousel({
  country,
  src,
  capital,
  text,
  countryId,
  setCountry,
  setCapital,
}) {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <StyledCarousel>
        <StyledInfo>
          <StyledTitleLarge>{country}</StyledTitleLarge>
          <StyledSubtitle>{text}</StyledSubtitle>
          <StyledButton
            onClick={() => {
              setCountry(countryId);
              setCapital(capital);
              window.scrollTo(0, 0);
            }}
            type="button"
          >
            {langText[locale].explore}
          </StyledButton>
        </StyledInfo>
        <StyledLink
          onClick={() => {
            setCountry(countryId);
            setCapital(capital);
            window.scrollTo(0, 0);
          }}
        >
          <StyledFigure data-category={capital}>
            <StyledImg alt="Travel" src={src} />
          </StyledFigure>
        </StyledLink>
      </StyledCarousel>
    </>
  );
}

CardsForCarousel.defaultProps = {
  country: 'Country',
  src: '',
  capital: 'Capital',
  text: '',
  setCountry: () => {},
  setCapital: () => {},
};

CardsForCarousel.propTypes = {
  path: PropTypes.string,
  country: PropTypes.string,
  src: PropTypes.string,
  capital: PropTypes.string,
  text: PropTypes.string,
  countryId: PropTypes.string,
  setCountry: PropTypes.func,
  setCapital: PropTypes.func,
};

export default CardsForCarousel;
