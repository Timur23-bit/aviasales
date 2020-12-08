import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'antd';

export default function ErrorMessage({ error }) {
  return (
    <Alert
      message={error.message}
      description=""
      type="error"
    />
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.instanceOf(Object).isRequired,
};
