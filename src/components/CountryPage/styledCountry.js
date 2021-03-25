import styled from 'styled-components';

export const StyledContent = styled.section`
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
  @media (max-width: 1200px) {
    padding: 0;
  }
`;

export const StyledContainer = styled.div`
  text-align: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export const StyledContainerInner = styled.h1`
  color: var(--color-light);
  font-size: 45px;
  margin: 0;
`;

export const StyledWrapper = styled.div`
  margin: 50px 0 0;
  display: flex;
  align-items: stretch;
`;

export const StyledItems = styled.div`
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const StyledInfo = styled.span`
  flex-flow: column;
  display: flex;
  flex: 65%;
  margin: 0 1rem 1.5rem;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
`;
export const StyledWidget = styled.span`
  flex-flow: column;
  display: flex;
  flex: 25%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  margin: 0 1rem 1.5rem;
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
    padding: 25px 80px;
    max-width: calc((100%) - 60px);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-light);
    background-color: var(--color-dark-rgba);
  }
  @media (max-width: 900px) {
    &::after {
      padding: 10px 60px;
      font-size: 25px;
      font-weight: 400;
    }
  }
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
`;
export const StyledTextContent = styled.div`
  padding: 20px;
`;

export const StyledCardText = styled.p`
  color: var(--color-light);
  font-size: 21px;
  line-height: 32px;
`;

export const StyledPhotoContent = styled.section`
  display: flex;
  justify-content: center;
  flex: 100%;
  margin: 0 5rem 2rem;
  @media (max-width: 1200px) {
    margin: 0 auto;
  }
`;
