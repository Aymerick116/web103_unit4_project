import express from 'express';
import itemsRoute from './routes/itemsRoutes.js';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Set up routes
app.use('/api', itemsRoute); // Use items routes for API

// Root route for a simple message
app.get('/', (req, res) => {
    res.send('Welcome to the BoltBucket API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});







// import express from 'express';
// import path from 'path';
// import favicon from 'serve-favicon';
// import dotenv from 'dotenv';
// import itemsRoutes from "./routes/itemsRoutes.js"

// dotenv.config();

// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(express.json());

// // Serve favicon based on environment
// if (process.env.NODE_ENV === 'development') {
//     app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')));
// } else if (process.env.NODE_ENV === 'production') {
//     app.use(favicon(path.resolve('public', 'lightning.png')));
//     app.use(express.static('public'));
// }

// // Set up routes
// app.use('/api/items', itemsRoutes); // Use items routes for API
// app.get('/', (req, res) => {
//     res.send('Welcome to the BoltBucket API');
// });

// // For production, serve the frontend
// if (process.env.NODE_ENV === 'production') {
//     app.get('/*', (_, res) =>
//         res.sendFile(path.resolve('public', 'index.html'))
//     );
// }

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server listening on http://localhost:${PORT}`);
// });




// // import express from 'express'
// // import path from 'path'
// // import favicon from 'serve-favicon'
// // import dotenv from 'dotenv'

// // // import the router from your routes file


// // dotenv.config()

// // const PORT = process.env.PORT || 3000

// // const app = express()

// // app.use(express.json())

// // if (process.env.NODE_ENV === 'development') {
// //     app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
// // }
// // else if (process.env.NODE_ENV === 'production') {
// //     app.use(favicon(path.resolve('public', 'lightning.png')))
// //     app.use(express.static('public'))
// // }

// // // specify the api path for the server to use


// // if (process.env.NODE_ENV === 'production') {
// //     app.get('/*', (_, res) =>
// //         res.sendFile(path.resolve('public', 'index.html'))
// //     )
// // }

// // app.listen(PORT, () => {
// //     console.log(`server listening on http://localhost:${PORT}`)
// // })