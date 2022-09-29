import React from 'react';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

export default function () {
  const testDATA = [
    {
      date: new Date(2022, 9, 29, 17),
      name: 'Торт',
      quantity: 10,
      distance: 33,
    }, {
      date: new Date(2022, 9, 28, 5),
      name: 'Стол',
      quantity: 1,
      distance: 5,
    }, {
      date: new Date(2022, 9, 28, 18),
      name: 'Видеокарта',
      quantity: 90,
      distance: 77,
    },
  ];

  return (
    <table border={1}>
      <TableHeader />
      {!!testDATA.length && testDATA.map((value) => (
        <TableRow key={value.name} row={value} />
      ))}
    </table>
  );
}
