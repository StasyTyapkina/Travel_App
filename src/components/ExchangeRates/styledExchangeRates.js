import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.6)
  );
`;

export const StyledText = styled.p`
  box-sizing: border-box;
  color: var(--color-light);
  font-size: 18px;
  margin: 20px 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 100%;
`;
