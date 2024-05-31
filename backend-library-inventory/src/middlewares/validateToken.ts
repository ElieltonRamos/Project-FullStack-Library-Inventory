import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt';

function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).send({ message: 'Token not found' });

  const token = authorization.split(' ')[1];
  const userAuthenticate = verifyToken(token);

  if (userAuthenticate === 'invalid-token') {
    return res.status(401).send({ message: 'Token is not valid' });
  }

  req.body.user = userAuthenticate;
  next();
}

export default validateToken;