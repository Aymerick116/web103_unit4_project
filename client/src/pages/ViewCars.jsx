import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllItems, deleteItem } from '../services/itemsApi'; // Import deleteItem function

const ViewCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllItems(); // Fetch all cars
        setCars(data); // Store cars in state
      } catch (error) {
        console.error('Failed to fetch cars', error);
      }
    };
    fetchCars();
  }, []);

  // Handle deleting a car
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this car?");
    if (confirmDelete) {
      try {
        await deleteItem(id); // Call deleteItem to remove from the database
        setCars(cars.filter(car => car.id !== id)); // Update state to remove deleted car
        alert("Car deleted successfully!");
      } catch (error) {
        console.error(`Failed to delete car with ID ${id}`, error);
        alert("Failed to delete the car.");
      }
    }
  };

  return (
    <div>
      <h1>Custom Cars</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {/* Link to car details page */}
            <Link to={`/customcars/${car.id}`}>{car.name}</Link>

            {/* Edit button */}
            <Link to={`/edit/${car.id}`} style={{ marginLeft: '10px' }}>
              <button>Edit</button>
            </Link>

            {/* Delete button */}
            <button 
              onClick={() => handleDelete(car.id)} 
              style={{ marginLeft: '10px', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCars;


// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { getAllItems } from '../services/itemsAPI.js'; // Import your API service

// // const ViewCars = ({ title }) => {
// //   const [cars, setCars] = useState([]);

// //   useEffect(() => {
// //     const fetchCars = async () => {
// //       const carsData = await getAllItems(); // Fetch the cars from API
// //       console.log(carsData)
// //       setCars(carsData); // Set the fetched data to state
// //     };
// //     fetchCars();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>{title}</h1>
// //       <ul>
// //         {cars.map((car) => (
// //           <li key={car.id}>
// //             <Link to={`/customcars/${car.id}`}>{car.name}</Link> {/* Ensure this is a Link */}
        
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ViewCars;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllItems } from '../services/itemsAPI.js'; // Adjust the path as needed

// const ViewCars = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await getAllItems(); // Fetch all cars
//         setCars(data); // Store cars in state
//       } catch (error) {
//         console.error('Failed to fetch cars', error);
//       }
//     };
//     fetchCars();
//   }, []);

//   return (
//     <div>
//       <h1>Custom Cars</h1>
//       <ul>
//         {cars.map((car) => (
//           <li key={car.id}>
//             {/* Link to car details page */}
//             <Link to={`/customcars/${car.id}`}>{car.name}</Link>

//             {/* Edit button */}
//             <Link to={`/edit/${car.id}`} style={{ marginLeft: '10px' }}>
//               <button>Edit</button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewCars;
