import React from 'react';

export default function () {
  const onChangeFields = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };
  const onChangeCondition = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <select size={1} name='fields' onChange={onChangeFields} defaultValue='chooseFiled'>
        <option value='chooseFiled' disabled>Выберите поле</option>
        <option value='name'>Название</option>
        <option value='quantity'>Количество</option>
        <option value='distance'>Расстояние</option>
      </select>
      <select size={1} name='fields' onChange={onChangeFields} defaultValue='ChooseCondition'>
        <option value='chooseCondition' disabled>Выберите условие</option>
        <option value='equally'>Равно</option>
        <option value='contains'>Содержит</option>
        <option value='more'>Больше</option>
        <option value='less'>Меньше</option>
      </select>
      <input />
    </div>
  );
}
