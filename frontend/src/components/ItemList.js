import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export const ItemList = ({ items }) => (
  <div className="row">
    {items.map((i) => (
      <Item key={i.id} item={i} />
    ))}
  </div>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    uploaded: PropTypes.string.isRequired,
  }),
};
