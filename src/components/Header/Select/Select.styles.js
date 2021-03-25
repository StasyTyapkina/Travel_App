import styled from 'styled-components';

const StyledSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  z-index: 1;
  outline: none;

  :focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }
`;

const Option = styled.option`
  background-color: rgba(238, 238, 238, 1);
  transition: 0.3s background-color linear;

  &:not(:checked) {
    background-color: rgba(238, 238, 238, 0.5);
  }
`;

const SelectWrapper = styled.div`
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;

  ${StyledSelect},
  &::after {
    grid-area: select;
  }

  min-width: 5ch;
  max-width: 5ch;

  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  // Optional styles
  // remove for transparency
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

  &:hover {
    background-color: #f4f3f3;
    box-shadow: inset 0 0px 0px 1px #ccc;
  }

  // Custom arrow
  &::after {
    content: '';
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;

export { StyledSelect, SelectWrapper, Option };
