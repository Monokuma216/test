import React from 'react';
import './App.css';
import { Filter, Table } from './components';

function App() {
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
    <div className='App'>
      <Filter />
      <Table data={testDATA} />
    </div>
  );
}

export default App;
