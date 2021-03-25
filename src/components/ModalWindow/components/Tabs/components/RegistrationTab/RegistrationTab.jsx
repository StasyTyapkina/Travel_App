import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  AvaImg,
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
import regTranslation from './locale';

function RegistrationTab({
  label,
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  avatarImg,
  setAvatarImg,
  error,
}) {
  const onHandleTabSwitch = useContext(TabsContext);
  const { locale } = useContext(LocaleContext);

  const onImgChanged = (e) => {
    if (e.target.files.length) {
      if (e.target.files[0].size > 102400) {
        e.target.value = '';
        setAvatarImg('');
        alert('File is too big');
        return;
      }
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        setAvatarImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <LoginHeading>
        <h2>{regTranslation[locale].title}</h2>
      </LoginHeading>
      <Form onSubmit={onSubmit} autoComplete="new-password">
        <FormFieldContainer isEmail>
          <span>
            <img src={emailIcon} alt="email" />
          </span>
          <div>
            <input
              autoComplete="new-password"
              name="email"
              type="email"
              required
              maxLength="60"
              minLength="7"
              placeholder={regTranslation[locale].placeholder}
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
              name="password"
              type="password"
              required
              maxLength="60"
              minLength="7"
              placeholder={regTranslation[locale].password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </FormFieldContainer>
        <FormFieldContainer>
          <label htmlFor="upload">{regTranslation[locale].avatar}</label>
          <AvaImg src={avatarImg} />
          <input
            id="upload"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={onImgChanged}
          />
        </FormFieldContainer>
        <MessageLine>{error}</MessageLine>
        <LoginButtonWrapper>
          <button type="submit">{regTranslation[locale].register}</button>
        </LoginButtonWrapper>
      </Form>
      <div>
        <p>{regTranslation[locale].hasAccount}</p>
        <SwitchTabButton onClick={onHandleTabSwitch('login')}>
          {regTranslation[locale].login}
        </SwitchTabButton>
      </div>
    </>
  );
}

RegistrationTab.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  avatarImg: PropTypes.string.isRequired,
  setAvatarImg: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default RegistrationTab;
