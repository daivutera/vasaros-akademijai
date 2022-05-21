import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.color === 'secondary' ? 'grey' : '#09949e')};
  margin-right: 1rem;
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background: #d6d0d0;
  }
`;
