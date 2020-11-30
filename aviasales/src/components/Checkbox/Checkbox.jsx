import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../Service/actions';

function Checkbox({
  // eslint-disable-next-line react/prop-types
  item, all, noAll, noStops, one, two, three,
}) {
  const { mess, bool } = item.fil;
  let className = 'filter__menu';
  if (bool) {
    className = 'filter__menu active';
  }
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className={className}
      >
        <input
          checked={bool}
          type="checkbox"
          onChange={(e) => {
            switch (mess) {
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
        <span>{mess}</span>
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
