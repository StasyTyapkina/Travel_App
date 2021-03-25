import React, { useContext } from 'react';
import {
  StyledFooter,
  StyledText,
  StyledLink,
  StyledLogo,
} from './styledFooter';
import { langText } from '../App/mainPageComponents/lang';
import { LocaleContext } from '../Locale/Locale';

function Footer() {
  const { locale } = useContext(LocaleContext);
  return (
    <StyledFooter>
      <StyledText> {langText[locale].creator[0]}</StyledText>
      <StyledLink
        href="https://github.com/self067"
        target="_blank"
        rel="noopener noreferrer"
      >
        {langText[locale].creator[1]}
      </StyledLink>

      <StyledLink
        href="https://github.com/StasyTyapkina"
        target="_blank"
        rel="noopener noreferrer"
      >
        {langText[locale].creator[2]}
      </StyledLink>
      <StyledLink
        href="https://github.com/nilubisan"
        target="_blank"
        rel="noopener noreferrer"
      >
        {langText[locale].creator[3]}
      </StyledLink>
      <StyledLink
        href="https://github.com/darkusss"
        target="_blank"
        rel="noopener noreferrer"
      >
        {langText[locale].creator[4]}
      </StyledLink>
      <StyledText>2021</StyledText>
      <StyledLink
        href="https://rs.school/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <StyledLogo src="images/rs_school_logo.svg" alt="RS School Logo" />
      </StyledLink>
    </StyledFooter>
  );
}

export default Footer;
