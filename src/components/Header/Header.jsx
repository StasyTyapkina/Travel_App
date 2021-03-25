import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import Select from './Select';
import SearchPlugin from './search/SearchPlugin';
import {
  StyledHeader,
  InnerWrapper,
  Logo,
  RightWrapper,
  SelectWrapper,
  AuthWrapper,
  AuthButton,
  Burger,
  FrontWrapper,
} from './Header.styles';
import useSelect from './hooks/useSelect';
import useModalHandler from './hooks/useModalHandler';
import useBurgerHandler from './hooks/useBurgerHandler';
import loginIcon from '../../images/user.svg';
import { LocaleContext } from '../Locale';

const options = {
  ru: 'RU',
  en: 'EN',
  de: 'DE',
};

const Header = ({
  hasSearchField,
  searchTerm,
  setSearchTerm,
  userInfo,
  setUserInfo,
}) => {
  const [isModalOpen, handleModal] = useModalHandler();
  const { locale, setLocale } = useContext(LocaleContext);

  useEffect(() => {
    setUserInfo(JSON.parse(sessionStorage.getItem('travelauth')));
  }, []);

  const apiurl = process.env.REACT_APP_APIURL;

  const logoutUser = (e) => {
    const body = userInfo.info?.email || '';
    const atoken = userInfo.auth_token || '';
    sessionStorage.removeItem('travelauth');
    setUserInfo(null);

    fetch(apiurl + '/users/logout', {
      method: 'POST',

      headers: {
        'Content-type': 'Application/json',
        Authorization: 'Bearer ' + atoken,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('43=', result);

        // if (!result.auth_token) {
        //   throw new Error(result.error);
        // }
      })
      .catch((error) => console.error('catch: ', error));
  };
  const [isBurgerOpen, handleBurgerState] = useBurgerHandler();

  return (
    <StyledHeader>
      <InnerWrapper>
        <Logo href="/">
          <i className="fas fa-globe-europe" />
        </Logo>
        <RightWrapper isMenuOpened={isBurgerOpen}>
          {hasSearchField && (
            <SearchPlugin
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          )}
          <SelectWrapper>
            <Select currentValue={locale} onChange={setLocale} data={options} />
          </SelectWrapper>
        </RightWrapper>
        <FrontWrapper>
          <AuthWrapper>
            {userInfo ? (
              <AuthButton onClick={logoutUser}>
                <img src={userInfo.info?.avatar} alt="authorization" />
              </AuthButton>
            ) : (
              <AuthButton onClick={handleModal}>
                <img src={loginIcon} alt="authorization" />
              </AuthButton>
            )}
          </AuthWrapper>
          <Burger onClick={handleBurgerState}>
            <div />
          </Burger>
        </FrontWrapper>
      </InnerWrapper>
      <ModalWindow
        open={isModalOpen}
        onClose={handleModal}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        // loged={loged}
        // setLoged={setLoged}
      />
    </StyledHeader>
  );
};

Header.defaultProps = {
  hasSearchField: true,
  searchTerm: '',
  setSearchTerm: () => {},
  userInfo: {},
  setUserInfo: () => {},
};

Header.propTypes = {
  hasSearchField: PropTypes.bool,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  userInfo: PropTypes.object,
  setUserInfo: PropTypes.func,
};

export default Header;
