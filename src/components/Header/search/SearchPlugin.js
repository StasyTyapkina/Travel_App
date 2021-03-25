import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  SearchWrapper,
  SearchInnerWrapper,
  SearchButton,
  InputField,
  InputLabel,
  Bar,
} from '../Header.styles';
import loupeIcon from '../../../images/loupe.svg';
import { langText } from '../../App/mainPageComponents/lang';
import { LocaleContext } from '../../Locale/Locale';

function SearchPlugin({ searchTerm, setSearchTerm }) {
  const { locale } = useContext(LocaleContext);
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <SearchWrapper>
      <SearchInnerWrapper>
        <InputField
          autoFocus
          autoComplete="off"
          name="countryInput"
          id="countryInput"
          type="search"
          value={searchTerm}
          onChange={handleChange}
          required
        />
        <InputLabel htmlFor="countryInput">
          {langText[locale].search}
        </InputLabel>
        <Bar />
      </SearchInnerWrapper>
      <SearchButton>
        <img src={loupeIcon} alt="search" />
      </SearchButton>
    </SearchWrapper>
  );
}
SearchPlugin.defaultProps = {
  searchTerm: '',
  setSearchTerm: () => {},
};

SearchPlugin.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default SearchPlugin;
