const API_URL = 'http://localhost:3000/api/items';

// Function to get all items
export const getAllItems = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching items", error);
        throw error;
    }
};

// Function to get a single item by ID
export const getItem = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching item with ID ${id}`, error);
        throw error;
    }
};

// // Fetch a single item by id
// export const getItemById = async (id) => {
//     try {
//       const response = await fetch(`${API_URL}/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching item with id ${id}:`, error);
//     }
//   };

// Function to create a new item
export const createItem = async (item) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating item", error);
        throw error;
    }
};

// Function to update an existing item
export const updateItem = async (id, updatedItem) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating item with ID ${id}`, error);
        throw error;
    }
};

// Function to delete an item by ID
export const deleteItem = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Failed to delete item with ID ${id}`);
        }
        return { message: 'Item deleted successfully' };
    } catch (error) {
        console.error(`Error deleting item with ID ${id}`, error);
        throw error;
    }
};
