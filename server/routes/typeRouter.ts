import { Router } from 'express';
import typeController from '../controllers/Type/typeController';
import { checkRole } from '../middleware/checkRoleMiddleware';

const typeRouter = Router();

typeRouter.post('/', checkRole('ADMIN'), typeController.create);
typeRouter.get('/', typeController.getAll);

module.exports = typeRouter;
