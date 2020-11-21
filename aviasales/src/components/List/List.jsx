import React from 'react';
import logotip from '../logo/S7 Logo (1).svg';
import Segment from '../Segment/Segment';

export default function List({ dataBase }) {
  const arr = dataBase.map((item) => {
    const price = `${item.price}`;
    return (
      <li
        className="card"
        key={Math.random()}
      >
        <div
          className="card__header"
          key={Math.random()}
        >
          <div
            className="price"
            key={Math.random()}
          >
            {`${price.slice(0, 2)} ${price.slice(2, price.length)} Р`}
          </div>
          <div
            className="logotip"
            key={Math.random()}
          >
            <img src={logotip} alt="Logotip" />
          </div>
        </div>
        <Segment
          segments={item.segments[0]}
        />
        <Segment
          segments={item.segments[1]}
        />
      </li>

    );
  });
  return arr;
}
