import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../Service/actions';
import logo from '../logo/Logo.svg';
import Lists from '../List/List';
import 'antd/dist/antd.css';
import Checkbox from '../Checkbox/Checkbox';
import NotFound from '../not_found/not_found';
import Spint from '../Spin/Spin';

function App({
  getId, getTickets, less, quickly, filter, sort, loading, error, tickets, id,
}) {
  let render = [];
  let ar = [];
  const pagination = document.querySelector('.ant-list-pagination');

  if (!id) {
    getId(id);
  } else if (!loading) {
    getTickets(id);
  }

  if (error.message === 'Error number 500') {
    getTickets(id);
  }

  if (!loading && pagination) {
    pagination.className = 'display';
  }

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
  const spin = loading || ar.length === 0 ? null : <Spint />;
  render = ar.length === 0 ? <NotFound /> : <Lists dataBase={ar} />;

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
              key={Math.random()}
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
          <div className="list">
            {render}
            {spin}
          </div>
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Object).isRequired,
  tickets: PropTypes.instanceOf(Array).isRequired,
  getTickets: PropTypes.func.isRequired,
  getId: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  filter: state.filter,
  sort: state.sort,
  loading: state.loading,
  error: state.error,
  tickets: state.tickets,
  id: state.id,
});

export default connect(mapStateToProps, actions)(App);
