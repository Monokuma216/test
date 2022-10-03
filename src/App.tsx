import React, { useEffect, useState } from 'react';
import './App.css';
import { Filter, Table, Pagination } from './components';

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
      date: new Date(2022, 11, 30, 18),
      name: 'Автомобиль',
      quantity: 2,
      distance: 34,
    }, {
      date: new Date(2022, 11, 1, 18),
      name: 'Крот',
      quantity: 1,
      distance: 56,
    }, {
      date: new Date(2022, 11, 12, 18),
      name: 'Палка',
      quantity: 23,
      distance: 2,
    }, {
      date: new Date(2022, 11, 31, 18),
      name: 'Кружка',
      quantity: 9,
      distance: 84,
    }, {
      date: new Date(2022, 11, 11, 18),
      name: 'Монитор',
      quantity: 2,
      distance: 87,
    }, {
      date: new Date(2022, 11, 13, 18),
      name: 'Кофе',
      quantity: 2,
      distance: 34,
    }, {
      date: new Date(2022, 11, 21, 18),
      name: 'Ракета',
      quantity: 1,
      distance: 900,
    }, {
      date: new Date(2022, 11, 27, 18),
      name: 'Железо',
      quantity: 6,
      distance: 80,
    }, {
      date: new Date(2022, 11, 29, 18),
      name: 'Провод',
      quantity: 78,
      distance: 31,
    }, {
      date: new Date(2022, 11, 29, 19),
      name: 'Кирпич',
      quantity: 100,
      distance: 2,
    }, {
      date: new Date(2022, 11, 18, 18),
      name: 'Зелень',
      quantity: 89,
      distance: 62,
    },
  ];

  const QYT_VIEW_ELEM = 5;

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
  const [prevSortName, setPrevSortName] = useState('');
  const sorting = (sortingField: string) => {
    let sortingData: Array<{ date: Date; name: string; quantity: number; distance: number; }>;
    if (prevSortName === sortingField) {
      sortingData = filterData.reverse();
    } else {
      sortingData = filterData.sort((a, b) => (sortField(a, b, sortingField)));
      setPrevSortName(sortingField);
    }
    setFilterData([...sortingData]);
  };

  // Пагинация
  const [page, setPage] = useState(0);
  const [pageQty, setPageQty] = useState(0);
  useEffect(() => {
    const maxPageQyt = Math.ceil(filterData.length / QYT_VIEW_ELEM);
    if (page > maxPageQyt) setPage(maxPageQyt - 1);
    setPageQty(maxPageQyt);
  }, [filterData]);

  return (
    <div className='App'>
      <Filter setFilter={setFilter} />
      <Table
        sorting={sorting}
        data={filterData.slice(page * QYT_VIEW_ELEM, page * QYT_VIEW_ELEM + QYT_VIEW_ELEM)}
      />
      <Pagination page={page} quantity={pageQty} onClickHandler={setPage} />
    </div>
  );
}

export default App;
