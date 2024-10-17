
import React, { useState } from 'react';
import { createItem } from '../services/itemsAPI.js';

const CreateCar = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = { name, description, price };
    await createItem(itemData);
    setName('');
    setDescription('');
    setPrice('');
    // Optionally redirect to the list of items
  };

  return (
    <div>
      <h1>Create New Item</h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCar;
