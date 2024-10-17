// src/pages/EditItem.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem, updateItem } from '../services/itemsAPI.js';

const EditCar = () => {
  const { id } = useParams(); // Get item ID from the route params
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id);
      setName(item.name);
      setDescription(item.description);
      setPrice(item.price);
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = { name, description, price };
    await updateItem(id, updatedItem);
    // Optionally redirect after updating
  };

  return (
    <div>
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditCar;