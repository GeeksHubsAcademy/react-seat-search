import React, { useState } from 'react';
const initialFilter = {
  price_from: '',
  price_to: '',
  type: '',
  guest_from: '',
  date_from: '',
  date_to: '',
};
const SearchForm = (props) => {
  const [filter, setFilter] = useState(initialFilter);

  function handleChange(event) {
      const newFilter = {
        ...filter,
        [event.target.name]: event.target.value,
      }
    setFilter(newFilter);
    props.onChangeFilter(newFilter);
}
  return (
    <div className='filter'>
      <input
        type='number'
        placeholder='price from'
        name='price_from'
        value={filter.price_from}
        onChange={handleChange}
      />
      <input
        type='number'
        placeholder='price to'
        name='price_to'
        value={filter.price_to}
        onChange={handleChange}
      />
      <input
        type='number'
        placeholder='guest_from'
        name='guest_from'
        value={filter.guest_from}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='type'
        name='type'
        value={filter.type}
        onChange={handleChange}
      />
      <input
        type='date'
        placeholder='date_from'
        name='date_from'
        value={filter.date_from}
        onChange={handleChange}
      />
      <input
        type='date'
        placeholder='date_to'
        name='date_to'
        value={filter.date_to}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchForm;
