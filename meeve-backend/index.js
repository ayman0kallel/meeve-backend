import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRoutes from './routes/userRoutes.js'
import db from './config/db.js'
import { createUserTable } from './models/userModel.js'; // Import the createUserTable function correctly

const app = express();
const PORT = 5000;

// Call the createUserTable function to create the 'users' table
createUserTable(); // Corrected function call

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('this is Meeve api.');
})

app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`)
);
