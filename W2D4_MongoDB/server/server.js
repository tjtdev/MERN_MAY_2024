import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/person.routes.js';
import dbConnect from './config/mongoose.config.js';
const app = express();

//  == MIDDLEWARE
app.use(express.json(), cors());


// ACCESS THE ENV VARIABLES
dotenv.config();
const PORT = process.env.PORT;

// function to access the remote DB
const DB_NAME = "people";
dbConnect(DB_NAME);

// ROUTES
app.use('/api', router);


app.listen(PORT, () =>
    console.log(`>>>>> Listening on port: ${PORT}`)
);