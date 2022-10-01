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

  const Data2Str = (date2str: Date) => {
    const mount = date2str.getMonth();
    if (mount < 10) return `${date2str.getDate()}.0${mount}.${date2str.getFullYear()}`;
    return `${date2str.getDate()}.${mount}.${date2str.getFullYear()}`;
  };

  return (
    <tr>
      <TableCell key='date'>{Data2Str(date)}</TableCell>
      <TableCell key='name'>{name}</TableCell>
      <TableCell key='quantity'>{quantity}</TableCell>
      <TableCell key='distance'>{distance}</TableCell>
    </tr>
  );
}
