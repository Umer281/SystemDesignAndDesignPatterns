import express from 'express';
import { connectToMongoDb } from './connect.js';
import setupRoutes from './route/index.js'; // Import the default export from your route file

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
connectToMongoDb('mongodb://localhost:27017/shortUrl').then(() => {
    console.log('MongoDB is connected');
});

// Set up routes
setupRoutes(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
