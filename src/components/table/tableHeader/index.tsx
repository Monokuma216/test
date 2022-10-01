import React from 'react';
import './style.css';

interface iTableHeader {
  sorting: (sortingField: string)=>void
}

export default function ({ sorting }: iTableHeader) {
  return (
    <thead className='table__head'>
      <tr>
        <th>Дата</th>
        <th onClick={(_) => sorting('name')}>Название</th>
        <th onClick={(_) => sorting('quantity')}>Количество</th>
        <th onClick={(_) => sorting('distance')}>Расстояние</th>
      </tr>
    </thead>
  );
}
