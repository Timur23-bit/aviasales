import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import Spint from '../Spin/Spin';
import logotip from '../logo/S7 Logo (1).svg';
import Segment from '../Segment/Segment';

export default function Lists({ dataBase }) {
  if (dataBase.length == 0) {
    return <Spint />;
  }

  return (
    <List
      itemLayout="vertical"
      pagination={{
        pageSize: 5,
      }}
      key={Math.random()}
      dataSource={dataBase}
      renderItem={(item) => {
        const price = (str) => {
          const prices = String(str);
          if (prices.length > 5) {
            return `${prices.slice(0, 3)} ${prices.slice(3, prices.length)} Р`;
          }
          if (prices.length > 3) {
            return `${prices.slice(0, 2)} ${prices.slice(2, prices.length)} Р`;
          }
          return `${prices}`;
        };

        return (
          <li
            className="card"
            key={Math.random()}
          >
            <div
              className="card__header"
            >
              <div
                className="price"
              >
                {price(item.price)}
              </div>
              <div
                className="logotip"
              >
                <img src={logotip} alt="Logotip" />
              </div>
            </div>
            <Segment
              key={Math.random()}
              segments={item.segments[0]}
            />
            <Segment
              key={Math.random()}
              segments={item.segments[1]}
            />
          </li>
        );
      }}
    />
  );
}

Lists.propTypes = {
  dataBase: PropTypes.instanceOf(Object).isRequired,
};
