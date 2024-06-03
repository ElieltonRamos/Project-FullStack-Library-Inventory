import { NextFunction, Request, Response } from 'express';

export function validateUser(req: Request, res: Response, next: NextFunction) {
  const { userName, password } = req.body;
  if (!userName && !password) {
    return res.status(400).json({ message: 'userName and password are required' });
  }

  if (!userName) {
    return res.status(400).json({ message: 'userName is required' });
  }

  if (!password) {
    return res.status(400).json({ message: 'password is required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'password must be at least 6 characters' });
  }

  next();
}