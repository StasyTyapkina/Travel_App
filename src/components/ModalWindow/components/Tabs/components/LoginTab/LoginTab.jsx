import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormFieldContainer,
  LoginButtonWrapper,
  LoginHeading,
  MessageLine,
  SwitchTabButton,
} from '../../../../ModalWindow.styles';
import emailIcon from '../../../../images/email.svg';
import passwordIcon from '../../../../images/lock.svg';
import { TabsContext } from '../../Tabs';
import { LocaleContext } from '../../../../../Locale';
import LoginTranslation from './locale';

function LoginTab({
  label,
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  error,
}) {
  const onHandleTabSwitch = useContext(TabsContext);
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <LoginHeading>
        <h2>{LoginTranslation[locale].title}</h2>
      </LoginHeading>
      <Form id="loginform" onSubmit={onSubmit} autoComplete="off">
        <FormFieldContainer isEmail>
          <span>
            <img src={emailIcon} alt="email" />
          </span>
          <div>
            <input
              autoComplete="off"
              type="email"
              required
              maxLength="60"
              minLength="7"
              placeholder={LoginTranslation[locale].placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </FormFieldContainer>
        <FormFieldContainer>
          <span>
            <img src={passwordIcon} alt="password" />
          </span>
          <div>
            <input
              autoComplete="off"
              type="password"
              required
              minLength="5"
              placeholder={LoginTranslation[locale].password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </FormFieldContainer>
        <MessageLine>{error}</MessageLine>
        <LoginButtonWrapper>
          <button type="submit">{LoginTranslation[locale].login}</button>
        </LoginButtonWrapper>
      </Form>
      <div>
        <p>{LoginTranslation[locale].noAccount}</p>
        <SwitchTabButton onClick={onHandleTabSwitch('register')}>
          {LoginTranslation[locale].register}
        </SwitchTabButton>
      </div>
    </>
  );
}

LoginTab.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginTab;
