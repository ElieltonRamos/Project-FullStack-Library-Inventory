import { Request, Response, Router } from 'express';
import BookController from '../controllers/bookController';
import BookService from '../services/bookService';
import BookModel from '../models/bookModel';
import { validateBook } from '../middlewares/validateBook';
import validateToken from '../middlewares/validateToken';

const bookRoutes = Router();

const bookModel = new BookModel();
const bookService = new BookService(bookModel);
const bookController = new BookController(bookService);

bookRoutes.post(
  '/',
  validateToken,
  validateBook,
  (req: Request, res: Response) => bookController.createBook(req, res));

bookRoutes.get(
  '/',
  validateToken,
  (req: Request, res: Response) => bookController.listAllBooks(req, res)
);

bookRoutes.get(
  '/:id',
  validateToken,
  (req: Request, res: Response) => bookController.findBookId(req, res)
);

bookRoutes.put(
  '/:id',
  validateToken,
  (req: Request, res: Response) => bookController.updateBook(req, res)
);

bookRoutes.delete(
  '/:id',
  validateToken,
  (req: Request, res: Response) => bookController.deleteBook(req, res)
);

bookRoutes.patch(
  '/:id/borrow',
  validateToken,
  (req: Request, res: Response) => bookController.borrowThisBook(req, res)
);

bookRoutes.patch(
  '/:id/giveback',
  validateToken,
  (req: Request, res: Response) => bookController.giveBackBook(req, res)
);

export default bookRoutes;