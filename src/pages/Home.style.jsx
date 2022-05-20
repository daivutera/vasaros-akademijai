import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-auto-rows: 300px; */
  grid-auto-rows: minmax(min-content, max-content);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;
