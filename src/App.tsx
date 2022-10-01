import React, { useEffect, useState } from 'react';
import './App.css';
import { Filter, Table } from './components';

function App() {
  interface iTestDataElem {
    date: Date,
    name: string,
    quantity: number,
    distance: number
  }

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
      distance: 105,
    }, {
      date: new Date(2022, 9, 28, 18),
      name: 'Видеокарта',
      quantity: 90,
      distance: 77,
    }, {
      date: new Date(2022, 11, 28, 18),
      name: 'Автомобиль',
      quantity: 2,
      distance: 34,
    },
  ];

  // Фильтрация
  const [filter, setFilter] = useState({
    text: '',
    field: '',
    condition: '',
  });
  const [filterData, setFilterData] = useState(testDATA);
  const filtering = () => {
    if (!!filter.text && !!filter.field && !!filter.condition) {
      switch (filter.condition) {
        case '=': {
          setFilterData(testDATA
            .filter((value) => value[filter.field as keyof iTestDataElem]
              .toString() === filter.text));
          break;
        }
        case '===': {
          // eslint-disable-next-line no-debugger
          debugger;
          setFilterData(testDATA
            .filter((value) => value[filter.field as keyof iTestDataElem].toString()
              .includes(filter.text)));
          break;
        }
        case '>': {
          setFilterData(testDATA
            .filter((value: iTestDataElem) => Number(value[filter.field as keyof iTestDataElem])
              > Number(filter.text)));
          break;
        }
        case '<': {
          setFilterData(testDATA
            .filter((value: iTestDataElem) => Number(value[filter.field as keyof iTestDataElem])
              < Number(filter.text)));
          break;
        }
        default:
          break;
      }
    } else {
      setFilterData(testDATA);
    }
  };
  useEffect(() => {
    filtering();
  }, [filter]);

  // Сортировка
  const sortField = (
    a: { [x: string]: number | Date | string },
    b: { [x: string]: number | Date | string },
    sortingField : string,
  ) => {
    if (sortingField === 'name') {
      const value1 = a[sortingField].toString().toLowerCase();
      const value2 = b[sortingField].toString().toLowerCase();
      if (value1 < value2) return -1;
      if (value1 > value2) return 1;
      return 0;
    }
    return Number(a[sortingField]) - Number(b[sortingField]);
  };

  const sorting = (sortingField: string) => {
    const sortingData = filterData.sort((a, b) => (sortField(a, b, sortingField)));
    setFilterData([...sortingData]);
  };

  return (
    <div className='App'>
      <Filter setFilter={setFilter} />
      <Table sorting={sorting} data={filterData} />
    </div>
  );
}

export default App;
