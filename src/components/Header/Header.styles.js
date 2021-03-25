import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  max-height: 200px;
`;

const InnerWrapper = styled.div`
  max-width: 1400px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 1440px) {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1240px) {
    max-width: 960px;
  }

  @media only screen and (max-width: 992px) {
    max-width: 720px;
    min-height: 200px;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px) {
    max-width: 540px;
    padding: 0 15px;
  }
`;

const Logo = styled.a`
  color: var(--color-light-new);
  font-size: 45px;
  @media (max-width: 700px) {
    font-size: 70px;
  }
`;

const RightWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 992px) {
    display: ${({ isMenuOpened }) => (isMenuOpened ? 'flex' : 'none')};
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    background-color: transparent;
    width: 100%;
    min-height: 100px;
  }
`;

const SearchWrapper = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 70px;
  }
`;

const SearchInnerWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  cursor: pointer;
  padding: 0 10px;
  background: none;
  border: 1px solid var(--color-grey);
  border-radius: 5px;
  max-width: 45px;
  max-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  &:hover {
    background-color: var(--color-dark);
  }
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: var(--color-dark);
    transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

const InputLabel = styled.label`
  color: var(--color-grey);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`;

const InputField = styled.input`
  background: transparent;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  max-width: 300px;
  border: none;
  border-bottom: 1px solid var(--color-grey);

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
    top: -20px;
    font-size: 14px;
    color: var(--color-dark);
  }

  &:focus ~ ${Bar}:before, &:focus ~ ${Bar}:after {
    width: 50%;
  }
`;

const SelectWrapper = styled.div`
  width: 150px;
  color: var(--color-black);
`;

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AuthButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  width: 35px;
  height: 35px;

  img {
    max-width: 100%;
  }
`;

const Burger = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  position: relative;
  display: none;
  width: 30px;
  height: 30px;
  margin-left: 30px;
  transition: 200ms all linear;

  div {
    position: absolute;
    width: 100%;
    height: 5px;
    top: 0;

    background: var(--color-grey);

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      top: 12px;
      left: 0;
      background: var(--color-grey);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      top: 24px;
      left: 0;
      background: var(--color-grey);
    }
  }

  @media only screen and (max-width: 992px) {
    display: inline-block;
  }
`;

const FrontWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 992px) {
    position: absolute;
    right: 15px;
    top: 30px;
  }
`;

export {
  StyledHeader,
  InnerWrapper,
  Logo,
  RightWrapper,
  SearchWrapper,
  SearchInnerWrapper,
  SearchButton,
  InputField,
  InputLabel,
  Bar,
  SelectWrapper,
  AuthWrapper,
  AuthButton,
  Burger,
  FrontWrapper,
};
