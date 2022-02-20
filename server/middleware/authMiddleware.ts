import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

module.exports = function (req: any, res: Response, next: NextFunction) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    const decoded: any = jwt.verify(token, process.env.SECRET_KEY || 'my_secret_key');

    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Не авторизован' });
  }
};
