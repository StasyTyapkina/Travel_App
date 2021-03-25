import styled from 'styled-components';

export const StyledCards = styled.section`
  padding: 2rem;
  margin-top: 1rem;
  display: flex;
  background: var(--color-light);
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  max-width: 1120px;
  width: 95%;
  margin: 0 auto;
`;

export const StyledContainerInner = styled.h1`
  color: var(--color-dark);
  font-size: 37px;
  margin: 0;
`;

export const StyledWrapper = styled.div`
  margin: 50px 0 45px;
`;

export const StyledItems = styled.ul`
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 6px 20px rgba(63, 82, 117, 0.31);
  }
`;

export const NoMatchedCountryHeading = styled.h2`
  color: var(--color-dark);
`;

export const StyledItem = styled.span`
  display: flex;
  flex: 23%;
  margin: 0 1rem 1.5rem;
  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

export const StyledFigure = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
  margin: 0;

  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    left: 0px;
    padding: 7px 20px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: var(--color-light);
    background-color: var(--color-dark-rgba);
  }
`;

export const StyledCardText = styled.p`
  color: var(--color-dark);
  font-size: 18px;
  line-height: 24px;
`;

export const StyledCardInner = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-dark);
`;

export const StyledInfo = styled.div`
  padding: 20px 30px 30px;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  -webkit-transition: -webkit-transform 0.5s ease;
  -moz-transition: -moz-transform 0.5s ease;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.5);
  }
`;
