import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';

export const Default = ({ children }) => (
  <div className="container">
    <HeaderMenu />
    {children}
  </div>
);

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
