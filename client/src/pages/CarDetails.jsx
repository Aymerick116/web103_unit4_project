// src/pages/ViewItemDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../services/itemsAPI.js';

const CarDetails = () => {
  const { id } = useParams(); // Get item ID from the route params
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await getItem(id);
      console.log(item)
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default CarDetails;
