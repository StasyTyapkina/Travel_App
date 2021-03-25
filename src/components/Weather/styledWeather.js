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

export const StyledTitle = styled.h3`
  color: var(--color-light);
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  text-shadow: 0px 4px rgba(0, 0, 0, 0.6);
`;

export const StyledText = styled.p`
  color: var(--color-light);
  font-size: 22px;
  margin: 20px 0 20px;
`;
