import React from 'react';
import PropTypes from 'prop-types';
import './Segment.css';

export default function Segment({ segments }) {
  const { date } = segments;
  const date1 = new Date(date);
  const duration = `${(segments.duration / 60 | 0)}ч ${segments.duration % 60}мин`;
  const hours1 = () => {
    if (date1.getUTCHours() < 10) {
      return `0${date1.getUTCHours()}`;
    }
    return date1.getUTCHours();
  };
  const minutes1 = () => {
    if (date1.getUTCMinutes() < 10) {
      return `0${date1.getUTCMinutes()}`;
    }
    return date1.getUTCMinutes();
  };
  const hours2 = () => {
    let hour = (date1.getUTCHours() + (segments.duration / 60 | 0)) % 24;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    return hour;
  };
  const minutes2 = () => {
    let minute = (date1.getUTCMinutes() + segments.duration) % 60;
    if (minute < 10) {
      minute = `0${minute}`;
    }
    return minute;
  };
  let stop = segments.stops.length;
  const stopString = () => {
    if (stop > 1) {
      stop += ' ПЕРЕСАДКИ';
    } else if (stop == 1) {
      stop += ' ПЕРЕСАДКА';
    } else {
      stop += ' ПЕРЕСАДОК';
    }
  };
  stopString();

  return (
    <div
      className="segment"
      key={segments.duration}
    >
      <div
        className="distance"
      >
        <p className="gray">
          {segments.origin}
          -
          {segments.destination}
        </p>
        <p className="black">
          {`${hours1()}:${minutes1()}`}
          {' '}
          -
          {' '}
          {`${hours2()}:${minutes2()}`}
          {' '}
        </p>
      </div>
      <div
        className="duration"
      >
        <p className="gray">В ПУТИ</p>
        <p className="black">{duration}</p>
      </div>
      <div
        className="stops"
      >
        <p className="gray">{stop}</p>
        <p className="black">{segments.stops.join(', ')}</p>
      </div>
    </div>
  );
}

Segment.propTypes = {
  segments: PropTypes.instanceOf(Object).isRequired,
};
