import React from 'react';
import TableCell from './tableCell';

interface iTableCell {
  row: {
    date: Date,
    name: string,
    quantity: number,
    distance: number
  };
}

export default function (props: iTableCell) {
  const {
    date,
    name,
    quantity,
    distance,
  } = props.row;

  return (
    <tr>
      <TableCell key='date'>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</TableCell>
      <TableCell key='name'>{name}</TableCell>
      <TableCell key='quantity'>{quantity}</TableCell>
      <TableCell key='distance'>{distance}</TableCell>
    </tr>
  );
}
