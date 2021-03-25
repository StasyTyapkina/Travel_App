import styled from 'styled-components';

export const StyledMain = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  @media (max-width: 800px) {
    height: 100%;
  }
`;

export const StyledMainCountry = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;s
`;

export const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

export const StyledSlider = styled.div`
  width: 90%;
  margin: auto;
`;
