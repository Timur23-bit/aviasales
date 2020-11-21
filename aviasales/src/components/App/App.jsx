import React, { useState, useEffect } from 'react';
import ticket from '../../Service/get-tikets';
import logo from '../logo/Logo.svg';
import List from '../List/List';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spint from '../Spin/Spin';
import 'antd/dist/antd.css';
import Checkbox from '../Checkbox/Checkbox';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const price = tickets.map((item) => item).sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price == b.price) return 0;
    return -1;
  });
  const quick = tickets.map((item) => item).sort((a, b) => {
    if (a.segments[0].duration > b.segments[0].duration) return 1;
    if (a.segments[0].duration == b.segments[0].duration) return 0;
    return -1;
  });
  const errorMess = error ? <ErrorMessage error={error} /> : null;
  let render = loading ? <Spint /> : <List dataBase={tickets} />;

  useEffect(() => {
    ticket.getSearchId().then((res) => {
      ticket.getResource(`tickets?searchId=${res.searchId}`)
        .then(async (rt) => {
          if (!rt.ok) {
            setLoading(false);
            throw new Error(`Error number ${rt.status}`);
          }
          const rest = await rt.json();
          setTickets(rest.tickets.splice(0, 5));
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    });
  }, []);

  if (filter === 'all') {
    render = loading ? <Spint /> : <List dataBase={tickets} />;
  } else if (filter === 'no_stops') {
    render = loading ? <Spint /> : <List dataBase={tickets.filter((item) => item.segments[0].stops.length == 0 || item.segments[1].stops.length == 0)} />;
  } else if (filter === 'one') {
    render = loading ? <Spint /> : <List dataBase={tickets.filter((item) => item.segments[0].stops.length == 1 || item.segments[1].stops.length == 1)} />;
  } else if (filter === 'two') {
    render = loading ? <Spint /> : <List dataBase={tickets.filter((item) => item.segments[0].stops.length == 2 || item.segments[1].stops.length == 2)} />;
  } else if (filter === 'three') {
    render = loading ? <Spint /> : <List dataBase={tickets.filter((item) => item.segments[0].stops.length == 3 || item.segments[1].stops.length == 3)} />;
  }

  function checked(event) {
    if (event.target.checked) {
      event.target.parentElement.className = 'filter__menu active';
    } else {
      event.target.parentElement.className = 'filter__menu';
    }
  }

  function unChecked() {
    const allInput = document.querySelectorAll('input');
    const allFilterMenu = document.querySelectorAll('.filter__menu');
    allInput.forEach((item) => {
      if (item.checked) {
        item.checked = false;
      }
    });
    allFilterMenu.forEach((item) => {
      if (item.className === 'filter__menu active') {
        item.className = 'filter__menu';
      }
    });
  }

  function select(event) {
    const allSort = document.querySelectorAll('.sort__menu');
    allSort.forEach((item) => {
      item.className = 'sort__menu';
    });
    event.target.className = 'sort__menu select';
  }
  const filterBase = [
    {
      stops: 'Все',
      fil: 'all',
    },
    {
      stops: 'Без пересадок',
      fil: 'no_stops',
    },
    {
      stops: '1 пересадка',
      fil: 'one',
    },
    {
      stops: '2 пересадки',
      fil: 'two',
    },
    {
      stops: '3 пересадки',
      fil: 'three',
    },
  ];

  return (
    <div className="art">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="app">
        <div className="filter">
          <div className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
          {filterBase.map((it) => (
            <Checkbox
              item={it}
              unChecked={unChecked}
              setFilter={setFilter}
              checked={checked}
            />
          ))}
        </div>
        <div className="orders">
          <div className="sort">
            {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
            <div
              role="button"
              className="sort__menu"
              style={{
                borderBottomLeftRadius: '5px',
                borderTopLeftRadius: '5px',
              }}
              onClick={(event) => {
                select(event);
                setTickets(price);
              }}
              onKeyPress={() => {}}
            >
              САМЫЙ ДЕШЕВЫЙ
            </div>
            {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
            <div
              role="button"
              className="sort__menu"
              style={{
                borderBottomRightRadius: '5px',
                borderTopRightRadius: '5px',
              }}
              onClick={(event) => {
                select(event);
                setTickets(quick);
              }}
              onKeyPress={() => {}}
            >
              САМЫЙ БЫСТРЫЙ
            </div>
          </div>
          <ul className="list">
            {errorMess}
            {render}
          </ul>
        </div>
      </div>
    </div>
  );
}
