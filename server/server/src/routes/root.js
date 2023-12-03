import express from 'express';
import getRoot from '../controllers/root/getRoot';
import postRoot from '../controllers/root/postRoot';
import authRoute from './auth';
import issueRoutes from './issue';

const root = express.Router();

root.get('/', getRoot);
root.post('/', postRoot);
root.use("/auth", authRoute);
root.use("/issue", issueRoutes);

export default root;