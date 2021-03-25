import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledFigure,
  StyledInfo,
  StyledCardText,
  StyledImg,
  StyledCardInner,
  StyledLink,
} from './styledCards';

function CardItem({
  country,
  src,
  capital,
  text,
  countryId,
  setCountry,
  setCapital,
}) {
  return (
    <>
      <StyledItem
        onClick={() => {
          setCountry(countryId);
          setCapital(capital);
          window.scrollTo(0, 0);
        }}
      >
        <StyledLink>
          <StyledFigure data-category={capital}>
            <StyledImg src={src} />
          </StyledFigure>
          <StyledInfo>
            <StyledCardInner>{country}</StyledCardInner>
            <StyledCardText>{text}</StyledCardText>
          </StyledInfo>
        </StyledLink>
      </StyledItem>
    </>
  );
}

CardItem.defaultProps = {
  path: '/',
  country: 'Country',
  src: '',
  capital: 'Capital',
  text: '',
  countryId: '',
  setCountry: () => {},
  setCapital: () => {},
};

CardItem.propTypes = {
  path: PropTypes.string,
  country: PropTypes.string,
  src: PropTypes.string,
  capital: PropTypes.string,
  text: PropTypes.string,
  setCountry: PropTypes.func,
  setCapital: PropTypes.func,
  countryId: PropTypes.string,
};

export default CardItem;
