import styled from 'styled-components';

export const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 50px;
  @media (max-width: 1024px) {
    margin: 50px 0;
    align-items: center;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
  @media (max-width: 1024px) {
    max-width: 30%;
  }
  @media (max-width: 800px) {
    max-width: 80%;
    align-items: center;
    text-align: center;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  text-decoration: none;
  max-width: 50%;
  cursor: pointer;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const StyledTitleLarge = styled.h3`
  font-size: 38px;
  color: var(--color-light);
  @media (max-width: 1024px) {
    font-size: 28px;
    margin: 10px 0;
  }
  @media (max-width: 450px) {
    font-size: 25px;
    margin: 10px 0;
  }
`;

export const StyledSubtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: var(--color-light);
  margin: 0 10px 20px 0;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid var(--color-dark);
  background-color: var(--color-dark-rgba);
  border-radius: 10px;
  font-size: 20px;
  color: var(--color-light);
  padding: 10px 35px;
  cursor: pointer;
  font-weight: normal;
  letter-spacing: 1.5px;
  &:hover {
    box-shadow: 1px 1px 20px 10px var(--color-blue-light);
  }
`;

export const StyledFigure = styled.figure`
  position: relative;
  margin: 0;
  &::after {
    content: attr(data-category);
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 25px;
    max-width: calc((100%) - 60px);
    font-size: 14px;
    font-weight: 700;
    color: var(--color-light);
    border-radius: 10px 0 0 0;
    background-color: var(--color-dark-rgba);
  }
`;

export const StyledImg = styled.img`
  width: 300px;
  height: 390px;
  overflow: hidden;
  transition: all 0.2s linear;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 700px) {
    width: 200px;
    height: 310px;
  }
  @media (max-width: 450px) {
    width: 160px;
    height: 240px;
  }
`;
