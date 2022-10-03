import React from 'react';
import './style.css';

interface iPageNumber{
  value: string,
  onClickHandler: React.Dispatch<React.SetStateAction<number>>
  side: number
}

export default function ({ value, onClickHandler, side }: iPageNumber) {
  return (
    <span
      tabIndex={-50}
      role='button'
      className='page_number'
      onClick={(_) => {
        onClickHandler((prevState) => (prevState - side));
      }}
      onKeyDown={(event) => event}
    >
      {value}
    </span>
  );
}
