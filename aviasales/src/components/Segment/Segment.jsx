import React from 'react';
import PropTypes from 'prop-types';

export default function Segment({ segments }) {
  const { date } = segments;
  const date1 = new Date(date);
  const duration = `${(segments.duration / 60 | 0)}ч ${segments.duration % 60}мин`;
  let hours1 = date1.getUTCHours();
  let minutes1 = date1.getUTCMinutes();
  let hours2 = (date1.getUTCHours() + (segments.duration / 60 | 0)) % 24;
  let minutes2 = (date1.getUTCMinutes() + segments.duration) % 60;
  let stop = segments.stops.length;
  if (stop > 1) {
    stop += ' ПЕРЕСАДКИ';
  } else if (stop == 1) {
    stop += ' ПЕРЕСАДКА';
  } else {
    stop += ' ПЕРЕСАДОК';
  }
  if (minutes1 < 10) {
    minutes1 = `0${minutes1}`;
  }
  if (hours1 < 10) {
    hours1 = `0${hours1}`;
  }
  if (minutes2 < 10) {
    minutes2 = `0${minutes2}`;
  }
  if (hours2 < 10) {
    hours2 = `0${hours2}`;
  }

  return (
    <div
      className="segment"
      key={Math.random()}
    >
      <div
        className="distance"
        key={Math.random()}
      >
        <p className="gray">
          {segments.origin}
          -
          {segments.destination}
        </p>
        <p className="black">
          {`${hours1}:${minutes1}`}
          {' '}
          -
          {' '}
          {`${hours2}:${minutes2}`}
          {' '}
        </p>
      </div>
      <div
        key={Math.random()}
        className="duration"
      >
        <p className="gray">В ПУТИ</p>
        <p className="black">{duration}</p>
      </div>
      <div
        key={Math.random()}
        className="stops"
      >
        <p className="gray">{stop}</p>
        <p className="black">{segments.stops.join(', ')}</p>
      </div>
    </div>
  );
}

Segment.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  segments: PropTypes.object.isRequired,
};
