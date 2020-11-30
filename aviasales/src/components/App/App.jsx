import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ticket from '../../Service/get-tikets';
import logo from '../logo/Logo.svg';
import List from '../List/List';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spint from '../Spin/Spin';
import 'antd/dist/antd.css';
import Checkbox from '../Checkbox/Checkbox';
import * as actions from '../../Service/actions';

function App({
  less, quickly, filter, sort,
}) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let render = loading ? <Spint /> : <List dataBase={tickets} />;
  let ar = [];

  const errorMess = error ? <ErrorMessage error={error} /> : null;
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

  if (filter[0].fil.bool) {
    ar = tickets;
  } else {
    filter.map((it) => {
      if (it.fil.mess !== 'Все') {
        switch (it.fil.mess) {
          case 'Без пересадок':
            if (it.fil.bool) {
              ar.push(...tickets.filter((item) => item.segments[0].stops.length === 0));
            }
            return ar;
          case '1 пересадка':
            if (it.fil.bool) {
              ar.push(...tickets.filter((item) => item.segments[0].stops.length === 1));
            }
            return ar;
          case '2 пересадки':
            if (it.fil.bool) {
              ar.push(...tickets.filter((item) => item.segments[0].stops.length === 2));
            }
            return ar;
          case '3 пересадки':
            if (it.fil.bool) {
              ar.push(...tickets.filter((item) => item.segments[0].stops.length === 3));
            }
            return ar;
          default:
            return tickets;
        }
      }
      return ar;
    });
  }
  if (sort.cheaper) {
    ar.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price === b.price) return 0;
      return -1;
    });
  } else if (sort.quick) {
    ar.sort((a, b) => {
      if (a.segments[0].duration > b.segments[0].duration) return 1;
      if (a.segments[0].duration === b.segments[0].duration) return 0;
      return -1;
    });
  }
  render = loading ? <Spint /> : <List dataBase={ar} />;
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
          {
          /* eslint-disable-next-line react/prop-types */
          filter.map((it) => (
            <Checkbox
              item={it}
            />
          ))
        }
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
              onClick={(e) => {
                select(e);
                less();
              }}
              onKeyPress={() => {
              }}
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
              onClick={(e) => {
                select(e);
                quickly();
              }}
              onKeyPress={() => {
              }}
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

App.propTypes = {
  filter: PropTypes.instanceOf(Array).isRequired,
  sort: PropTypes.instanceOf(Object).isRequired,
  less: PropTypes.func.isRequired,
  quickly: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
  sort: state.sort,
});

export default connect(mapStateToProps, actions)(App);
