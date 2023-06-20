import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
`;
export const Title = styled.h2`
  color: gray;
  text-align: center;
  text-transform: uppercase;
  padding-top: 24px;
  padding-bottom: 24px;
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 4);
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  outline: 0.5px solid gray;
  background-color: ${() => getRandomHexColor()};
`;
export const Label = styled.span`
  color: white;
  margin-bottom: 6px;
`;
export const Percentage = styled.span`
  color: white;
  font-size: 18px;
`;
