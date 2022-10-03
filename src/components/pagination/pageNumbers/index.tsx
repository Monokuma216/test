import React from 'react';
import './style.css';

interface iPageNumber{
  value: number,
  onClickHandler: React.Dispatch<React.SetStateAction<number>>
  focused: boolean
}

export default function ({ value, onClickHandler, focused }: iPageNumber) {
  return (
    <span
      tabIndex={value}
      role='button'
      className={`page_number ${focused && ' active'}`}
      onClick={(_) => {
        onClickHandler(value);
      }}
      onKeyDown={(event) => event}
    >
      {value + 1}
    </span>
  );
}
