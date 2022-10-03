import React from 'react';
import './style.css';
import PageNumbers from './pageNumbers';
import SideButtons from './sideButtons';

interface iPagination {
  page: number;
  quantity: number;
  onClickHandler: React.Dispatch<React.SetStateAction<number>>
}

export default function ({ page, onClickHandler, quantity }: iPagination) {
  return (
    <div className='pagination'>
      <SideButtons side={1} onClickHandler={onClickHandler} value='<' />
      {Array.from(Array(quantity).keys())
        .map((value) => (
          <PageNumbers
            value={value}
            onClickHandler={onClickHandler}
            focused={page === value}
          />
        ))}
      <SideButtons side={-1} onClickHandler={onClickHandler} value='>' />
    </div>
  );
}
