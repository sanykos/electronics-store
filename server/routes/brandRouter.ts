import { Router } from 'express';
import brandController from '../controllers/Brand/brandController';

const brandRouter = Router();

brandRouter.post('/', brandController.create);
brandRouter.get('/', brandController.getAll);

module.exports = brandRouter;
