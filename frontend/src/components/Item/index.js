import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import './style.scss';

const Item = ({ item: { name, title, uploaded } }) => (
  <div className="col-sm-6 mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title custom-title">{title || name}</h5>
        <p className="card-text">
          {dayjs(uploaded).format('HH:mm DD-MM-YYYY')}
        </p>
        <video controls width="100%">
          <source src={`${process.env.REACT_APP_API_URL}/uploads/${name}`} />
        </video>
      </div>
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    uploaded: PropTypes.string.isRequired,
  }),
};

export default Item;
