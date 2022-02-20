import { Request, Response } from 'express';
import { Type } from '../../models/models';
import { ApiError } from '../../error/ApiError';

class TypeController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req: Request, res: Response) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

export default new TypeController();
