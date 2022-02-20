import { Router } from 'express';
import deviceController from '../controllers/Device/deviceController';

const deviceRouter = Router();

deviceRouter.post('/', deviceController.create);
deviceRouter.get('/', deviceController.getAll);
deviceRouter.get('/:id', deviceController.getOne);

module.exports = deviceRouter;
