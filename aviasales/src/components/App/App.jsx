import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../Service/actions';
import logo from '../logo/Logo.svg';
import Lists from '../List/List';
import 'antd/dist/antd.css';
import './App.css';
import Checkbox from '../Checkbox/Checkbox';
import NotFound from '../not_found/not_found';
import Spint from '../Spin/Spin';

function App({
  getId,
  getTickets,
  less,
  quickly,
  filters,
  sort,
  loading,
  tickets,
  id,
  count,
}) {
  let render = [];
  let ar = [];

  if (!id) {
    getId();
  }

  useEffect(() => {
    if (id) {
      getTickets(id);
    }
  }, [count, id]);

  function filterTickets() {
    if (filters[0].filter.boolean) {
      ar = tickets;
    } else {
      filters.map((item) => {
        if (item.filter.message !== 'Все') {
          switch (item.filter.message) {
            case 'Без пересадок':
              if (item.filter.boolean) {
                ar.push(
                  ...tickets.filter(
                    (items) => items.segments[0].stops.length === 0,
                  ),
                );
              }
              return ar;
            case '1 пересадка':
              if (item.filter.boolean) {
                ar.push(
                  ...tickets.filter(
                    (items) => items.segments[0].stops.length === 1,
                  ),
                );
              }
              return ar;
            case '2 пересадки':
              if (item.filter.boolean) {
                ar.push(
                  ...tickets.filter(
                    (items) => items.segments[0].stops.length === 2,
                  ),
                );
              }
              return ar;
            case '3 пересадки':
              if (item.filter.boolean) {
                ar.push(
                  ...tickets.filter(
                    (items) => items.segments[0].stops.length === 3,
                  ),
                );
              }
              return ar;
            default:
              return tickets;
          }
        }
        return ar;
      });
    }
  }
  function sortTickets() {
    if (sort.cheaper) {
      ar.sort((prev, next) => {
        if (prev.price > next.price) return 1;
        if (prev.price === next.price) return 0;
        return -1;
      });
    } else if (sort.quick) {
      ar.sort((prev, next) => {
        if (prev.segments[0].duration > next.segments[0].duration) return 1;
        if (prev.segments[0].duration === next.segments[0].duration) return 0;
        return -1;
      });
    }
  }
  function select(event) {
    const allSort = document.querySelectorAll('.sort__menu');
    allSort.forEach((item) => {
      item.className = 'sort__menu';
    });
    event.target.className = 'sort__menu select';
  }
  filterTickets();
  sortTickets();

  const spin = loading || ar.length === 0 ? null : <Spint />;
  render = ar.length === 0 ? <NotFound /> : <Lists dataBase={ar} />;

  return (
    <div className="art">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="app">
        <div className="filter">
          <div className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
          {
            filters.map((item) => (
              <Checkbox item={item} key={item.filter.message} />
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
              onClick={(e) => {
                select(e);
                quickly();
              }}
              onKeyPress={() => {}}
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
  filters: PropTypes.instanceOf(Array).isRequired,
  sort: PropTypes.instanceOf(Object).isRequired,
  less: PropTypes.func.isRequired,
  quickly: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  tickets: PropTypes.instanceOf(Array).isRequired,
  getTickets: PropTypes.func.isRequired,
  getId: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  filters: state.reduceFilters.filters,
  sort: state.reduceSort.sort,
  loading: state.reduceFetch.loading,
  error: state.reduceFetch.error,
  tickets: state.reduceFetch.tickets,
  id: state.reduceFetch.id,
  count: state.reduceFetch.count,
});

export default connect(mapStateToProps, actions)(App);
