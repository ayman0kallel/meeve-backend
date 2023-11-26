import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRoutes from './routes/users.js';
import meetsRoutes from './routes/meets.js';
import db from './models/db.js';
import { createUserTable } from './models/userModel.js'; // Import the createUserTable function correctly

const app = express();
const PORT = 5000;

// Call the createUserTable function to create the 'users' table
createUserTable(); // Corrected function call

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoutes);

//app.use('/meets', meetsRoutes);

app.get('/', (req, res) => {
    res.send('Hello from homepage');
})

// Les meets
app.get("/meets", (req, res) => {
    const q = "SELECT * FROM meets INNER JOIN sports ON meets.sport_id = sports.id_sport"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/meets", (req,res) => {
    const q = "INSERT INTO meets (`sport_id`,`date`, `time`, `location`, `author_id`) VALUES (?)"
    const values = [
        req.body.sport_id,
        req.body.date,
        req.body.time,
        req.body.location,
        req.body.author_id
    ];

    db.query(q, [values], (err,data) => {
        if(err) return res.json(err);
        return res.json("meets has been created");
    })
})

// Les sports
app.get("/sports", (req,res) => {
    const q = "SELECT * FROM sports"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
