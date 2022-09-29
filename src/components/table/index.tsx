import React from 'react';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

interface iTable {
  data: {date: Date, name: string, quantity: number, distance: number}[]
}

export default function (props: iTable) {
  return (
    <div>
      <table border={1}>
        <TableHeader />
        <tbody>
          {!!props.data.length && props.data.map((value) => (
            <TableRow key={value.name} row={value} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
