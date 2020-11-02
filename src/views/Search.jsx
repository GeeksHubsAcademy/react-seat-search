import React, { useEffect, useState } from 'react';
import { getRooms } from '../services/api.service';

import { isDateBetween } from '../services/date.service';

const initialFilter = {
  price_from: '',
  price_to: '',
  type: '',
  guest_from: '',
  date_from:'',
  date_to:  '',
};

function Search() {
  const [rooms, setRooms] = useState([]);

  const [filter, setFilter] = useState(initialFilter);
  console.log(filter);
  useEffect(() => {
    getRooms().then((data) => setRooms(data));
  }, []);

  function handleChange(event) {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  }
  function resetFilter(event) {
    setFilter(initialFilter);
  }

  const roomsFiltered = rooms.filter((room) => {
    let validPricePerNightFrom = filter.price_from
      ? room.price_per_night >= +filter.price_from
      : true;
    let validPricePerNightTo = filter.price_to
      ? room.price_per_night <= +filter.price_to
      : true;
    let validGuest = filter.guest_from
      ? room.guest >= +filter.guest_from
      : true;
    //  let validType = filter.type ? room.type === filter.type : true;
    let validType = room.type.includes(filter.type);

    let validDate = !room.booked.some(
      (date) =>
        isDateBetween(date, filter.date_from, filter.date_to),
    );

    return (
      validPricePerNightFrom &&
      validPricePerNightTo &&
      validGuest &&
      validType &&
      validDate
    );
  });

  return (
    <div className='Search'>
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
        <button onClick={resetFilter}>reset</button>
      </div>
      <div className='rooms'>
        {roomsFiltered.map((room) => (
          <div className='room' key={room.id}>
            <div className='id'>{room.id}</div>
            <div className='price'>{room.price_per_night}</div>
            <div className='type'>{room.type}</div>
            <div className='guest'>{room.guest}</div>
            <div className='booked'>
              {room.booked.map((date) => (
                <div key={date}>{date}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
