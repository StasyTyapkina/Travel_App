import styled from 'styled-components';

export const ImageGalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageGalleryWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 950px) {
    width: 660px;
  }
  @media (max-width: 700px) {
    width: 410px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const ImageGalleryTitle = styled.p`
  color: var(--color-light);
  font-size: 22px;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const ImageGalleryText = styled.p`
  color: var(--color-light);
  font-size: 18px;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const CommentBox = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 20px;
  justify-content: space-between;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CommentItem = styled.div`
  height: 100%;
  background-color: var(--color-dark-rgba);
  color: var(--color-light);
`;

export const Video = styled.iframe`
  width: 960px;
  height: 630px;
  @media (max-width: 1000px) {
    width: 660px;
    height: 310px;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    width: 410px;
    height: 310px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 240px;
  }
`;

export const MapContent = styled.div`
  width: 960px;
  height: 630px;
  @media (max-width: 1000px) {
    width: 660px;
    height: 310px;
  }
  @media (max-width: 700px) {
    width: 410px;
    height: 310px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 240px;
  }
`;
