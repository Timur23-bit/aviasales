import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({
  item, unChecked, setFilter, checked,
}) {
  const { stops, fil } = item;
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className="filter__menu"
      >
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked) {
              unChecked();
              checked(event);
              event.target.checked = true;
              setFilter(fil);
            } else {
              unChecked();
              setFilter('all');
            }
          }}
        />
        <span>{stops}</span>
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  unChecked: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired,
};
