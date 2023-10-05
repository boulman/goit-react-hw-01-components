import React from 'react';
import styled from 'styled-components';

const TTable = styled.table`
  margin: 30px;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.6);
  width: fit-content;
`;

const TRow = styled.tr`
  th {
    background-color: ${({ $thead, $idx }) =>
      $thead ? 'lightblue' : $idx % 2 !== 0 ? 'lightgrey' : 'white'};
    width: 200px;
    padding: 8px 0;
    color: ${props => (props.$thead ? 'white' : 'grey')};
    font-weight: ${props => (props.$thead ? '700' : '400')};
  }
`;

export default function Transactions({ items = [] }) {
  console.log(items);
  return (
    <TTable>
      <thead>
        <TRow $thead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TRow>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <TRow $idx={idx} key={id}>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </TRow>
        ))}
      </tbody>
    </TTable>
  );
}
