import { NextFunction, Request, Response } from 'express';

export function validateBook(req: Request, res: Response, next: NextFunction) {
  const { title, description, image } = req.body;

  if (!title || !description || !image) {
    return res.status(400).json(
      { message: 'necessary to inform title, content and image to register a book' });
  }

  if (!title) return res.status(400).json({ message: 'title is required' });

  if (!description) return res.status(400).json({ message: 'description is required' });

  if (!image) return res.status(400).json({ message: 'image is required' });

  next();
}