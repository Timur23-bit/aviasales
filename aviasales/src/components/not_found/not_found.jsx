import { Alert } from 'antd';
import React from 'react';

export default function NotFound() {
  return (
    <Alert
      message="Рейсов, подходящих под заданные фильтры, не найдено"
      description=""
      type="info"
    />
  );
}
