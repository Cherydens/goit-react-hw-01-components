import styled from '@emotion/styled';
export const Table = styled.table`
  width: 100%;
`;
export const TableHeadItem = styled.th`
  background-color: blue;
  text-transform: uppercase;
  color: white;
  height: 32px;
`;
export const TD = styled.td`
  padding: 10px 0;
  :nth-of-type(3n-2) {
    text-transform: capitalize;
    padding-left: 20px;
  }
  :nth-of-type(2n) {
    text-transform: capitalize;
    padding-right: 20px;
    text-align: right;
  }
  :nth-of-type(3n) {
    text-align: center;
  }
`;

export const TR = styled.tr`
  min-width: 100%;
  :nth-of-type(2n) {
    background-color: lightgrey;
  }
`;
