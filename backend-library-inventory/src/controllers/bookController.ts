import { Request, Response } from 'express';
import BookService from '../services/bookService';
import mapStatusHTTP from '../utils/mapStatusHttp';

class BookController {
  private internalErrorMsg = 'Internal server error';
  
  constructor(private service: BookService) { }

  async createBook(req: Request, res: Response) {
    try {
      const book = req.body;
      const { status, data } = await this.service.createBook(book);
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in createBook', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }

  async listAllBooks(req: Request, res: Response) {
    try {
      const { status, data } = await this.service.listAllBooks();
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in listAllBooks', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }

  async findBookId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, data } = await this.service.findBookId(Number(id));
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in findBookId', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }
}

export default BookController;