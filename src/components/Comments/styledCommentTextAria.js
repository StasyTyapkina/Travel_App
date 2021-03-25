import styled from 'styled-components';

export const CommentContainer = styled.div`
  background-color: var(--color-dark-rgba);
  color: var(--color-light);
  padding: 20px;
`;

export const CommentRow = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const CommentColSmall = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  } ;
`;
export const CommentColLarge = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  } ;
`;

export const Label = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-dark);
  resize: vertical;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-dark);
  resize: vertical;
  margin-bottom: 10px;
`;

export const Submit = styled.input`
  background-color: var(--color-blue-light-rgba);
  color: var(--color-light);
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  float: right;
  &:hover {
    background-color: var(--color-dark);
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;
