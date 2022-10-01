import React from 'react';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import './style.css';

interface iTable {
  data: {date: Date, name: string, quantity: number, distance: number}[]
  sorting: (sortingField: string)=>void
}

export default function (props: iTable) {
  return (
    <div className='table'>
      <table border={1}>
        <TableHeader sorting={props.sorting} />
        <tbody>
          {!!props.data.length && props.data.map((value) => (
            <TableRow key={value.name} row={value} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
