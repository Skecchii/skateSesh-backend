import './config/database.js';
import express from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);

const port = 3001;
app.listen(port, () => console.log(`listening on ${port}`));
