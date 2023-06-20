import styled from '@emotion/styled';

export const Card = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: cadetblue;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 12px;
`;
export const Tag = styled.p`
  color: gray;
  margin-bottom: 12px;
`;
export const Location = styled.p`
  color: gray;
`;
export const StatsContainer = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Stats = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  align-items: center;
  padding: 20px;
  background-color: gainsboro;
  outline: 0.5px solid gray;
`;
export const Label = styled.span`
  margin-bottom: 4px;
  color: gray;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
