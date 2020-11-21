import React, { useState } from 'react';
import ticket from '../../Service/get-tikets';
import logo from '../logo/Logo.svg';
import List from '../List/List';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('all');
  let filTik = tickets;
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

  if (tickets.length === 0) {
    ticket.getSearchId().then((res) => {
      ticket.getResource(`tickets?searchId=${res.searchId}`)
        .then((rt) => {
          setTickets(rt.tickets.splice(0, 5));
        });
    });
  }

  if (filter === 'all') {
    filTik = tickets;
  } else if (filter === 'no_stops') {
    filTik = tickets.filter((item) => item.segments[0].stops.length == 0 || item.segments[1].stops.length == 0);
  } else if (filter === 'one') {
    filTik = tickets.filter((item) => item.segments[0].stops.length == 1 || item.segments[1].stops.length == 1);
  } else if (filter === 'two') {
    filTik = tickets.filter((item) => item.segments[0].stops.length == 2 || item.segments[1].stops.length == 2);
  } else if (filter === 'three') {
    filTik = tickets.filter((item) => item.segments[0].stops.length == 3 || item.segments[1].stops.length == 3);
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

  return (
    <div className="art">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="app">
        <div className="filter">
          <div className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
          <form>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="filter__menu">
              <input
                type="checkbox"
                onChange={(event) => {
                  unChecked();
                  event.target.checked = true;
                  checked(event);
                  setFilter('all');
                }}
              />
              <span>Все</span>
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="filter__menu"
            >
              <input
                id="js1"
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    setFilter('no_stops');
                    unChecked();
                    event.target.checked = true;
                    checked(event);
                  } else {
                    setFilter('all');
                    unChecked();
                  }
                }}
              />
              <span>Без пересадок</span>
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="filter__menu">
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    setFilter('one');
                    checked(event);
                    unChecked();
                    event.target.checked = true;
                  } else {
                    setFilter('all');
                    unChecked();
                  }
                }}
              />
              <span>1 пересадка</span>
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="filter__menu">
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    setFilter('two');
                    checked(event);
                    unChecked();
                    event.target.checked = true;
                  } else {
                    setFilter('all');
                    unChecked();
                  }
                }}
              />
              <span>2 пересадки</span>
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="filter__menu">
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    checked(event);
                    unChecked();
                    event.target.checked = true;
                    setFilter('three');
                  } else {
                    unChecked();
                    setFilter('all');
                  }
                }}
              />
              <span>3 пересадки</span>
            </label>
          </form>
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
            <List
              dataBase={filTik}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
