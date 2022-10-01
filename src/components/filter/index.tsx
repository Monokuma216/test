import React from 'react';
import './style.css';

interface iFilter {
  setFilter: React.Dispatch<React.SetStateAction<{text: string, field: string, condition: string}>>
}

export default function (props: iFilter) {
  const onChangeText = (event: { target: { value: string; }; }) => {
    props.setFilter((prevState) => ({
      text: event.target.value,
      field: prevState.field,
      condition: prevState.condition,
    }));
  };
  const onChangeFields = (event: { target: { value: string; }; }) => {
    props.setFilter((prevState) => ({
      text: prevState.text,
      field: event.target.value,
      condition: prevState.condition,
    }));
  };
  const onChangeCondition = (event: { target: { value: string; }; }) => {
    props.setFilter((prevState) => ({
      text: prevState.text,
      field: prevState.field,
      condition: event.target.value,
    }));
  };

  return (
    <div className='block-filters'>
      <select size={1} name='fields' onChange={onChangeFields} defaultValue='chooseFiled'>
        <option value='chooseFiled' disabled>Выберите поле</option>
        <option value='date'>Дата</option>
        <option value='name'>Название</option>
        <option value='quantity'>Количество</option>
        <option value='distance'>Расстояние</option>
      </select>
      <select size={1} name='conditions' onChange={onChangeCondition} defaultValue='chooseCondition'>
        <option value='chooseCondition' disabled>Выберите условие</option>
        <option value='='>Равно</option>
        <option value='==='>Содержит</option>
        <option value='>'>Больше</option>
        <option value='<'>Меньше</option>
      </select>
      <input onChange={onChangeText} />
    </div>
  );
}
