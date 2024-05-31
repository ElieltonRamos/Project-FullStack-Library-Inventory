import { Request, Response, Router } from 'express';
import UserController from '../controllers/userController';
import UserService from '../services/UserService';
import UserModel from '../models/userModel';

const userRoutes = Router();

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

userRoutes.post(
  '/',
  (req: Request, res: Response) => userController.createUser(req, res));

userRoutes.post(
  '/login',
  (req: Request, res: Response) => userController.loginUser(req, res)
);

export default userRoutes;