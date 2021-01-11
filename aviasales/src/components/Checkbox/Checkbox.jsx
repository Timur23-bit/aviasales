import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../Service/actions';
import './Checkbox.css';

function Checkbox({
  item, all, noAll, noStops, one, two, three,
}) {
  const { message, boolean } = item.filter;

  function classNameFilterMenu() {
    if (boolean) {
      return 'filter__menu active';
    }
    return 'filter__menu';
  }

  return (
    <div
      key={Math.random()}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className={classNameFilterMenu()}
      >
        <input
          checked={boolean}
          type="checkbox"
          onChange={(e) => {
            switch (message) {
              case 'Все':
                return all(e.target.checked);
              case 'Без пересадок':
                noStops(e.target.checked);
                return noAll();
              case '1 пересадка':
                one(e.target.checked);
                return noAll();
              case '2 пересадки':
                two(e.target.checked);
                return noAll();
              case '3 пересадки':
                three(e.target.checked);
                return noAll();
              default:
                return one();
            }
          }}
        />
        <span>{message}</span>
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  all: PropTypes.func.isRequired,
  noAll: PropTypes.func.isRequired,
  noStops: PropTypes.func.isRequired,
  one: PropTypes.func.isRequired,
  two: PropTypes.func.isRequired,
  three: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(Checkbox);
