import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send({ message: 'backend is running!'});
});

app.use('/user', userRoutes);
app.use('/book', bookRoutes);

export default app;
