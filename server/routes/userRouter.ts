import { Router } from 'express';
import userController from '../controllers/User/userController';
const authMiddleware = require('../middleware/authMiddleware');

const userRouter = Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', authMiddleware, userController.check);

module.exports = userRouter;
