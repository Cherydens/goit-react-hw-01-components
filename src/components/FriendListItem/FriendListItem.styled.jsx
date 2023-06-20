import styled from '@emotion/styled';

export const Card = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 12px;
  border-radius: 5px;
  height: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
`;
