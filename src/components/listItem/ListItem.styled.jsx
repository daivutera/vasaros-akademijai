import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 5px 5px 10px grey;
  position: relative;
  height: minmax(min-content, max-content);
  border-radius: 0.35rem;
  &:hover {
    background-color: #cfeef77d;
    cursor: pointer;
  }
`;
export const P = styled.p`
  text-align: justify;
  padding: 0.5rem;
  margin-bottom: 3rem;
  display: block;
  min-width: calc(max(100% - 1rem));
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  padding: 0rem 0.5rem 1.7rem 0.5rem;
  background: #eaf4f77f;
  min-width: calc(max(100% - 1rem));
  @media (max-width: 470px) {
    height: auto;
  }
`;
export const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
`;

export const UserInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 1.5rem;
  min-width: calc(max(100% - 1rem));
  background-color: #eaf4f77f;
  margin-top: 0.5rem;
  padding: 0.5rem 0.5rem 0rem 0.5rem;
  position: absolute;
  bottom: 0;
  font-size: 0.8rem;
`;
