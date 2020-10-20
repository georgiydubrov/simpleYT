import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Default } from '../layout';
import { ItemList } from './ItemList';

export const Main = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await axios(`${process.env.REACT_APP_API_URL}/video`);
    if (response.data && response.data.length) setItems(response.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Default>
      {!items.length && (
        <div>
          There is no video right now, let&lsquo;s{' '}
          <Link to="/upload">upload the first one</Link>
        </div>
      )}
      <ItemList items={items} />
    </Default>
  );
};
