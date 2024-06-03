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

  async updateBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const book = req.body;
      const { status, data } = await this.service.updateBook(Number(id), book);
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in updateBook', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }

  async borrowThisBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { user } = req.body;
      const { status, data } = await this.service.borrowThisBook(Number(id), Number(user.id));
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in BorrowThisBook', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }

  async giveBackBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, data } = await this.service.giveBackBook(Number(id));
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in giveBackBook', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, data } = await this.service.deleteBook(Number(id));
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      const erroMsg = error as Error;
      console.log('Error in deleteBook', erroMsg.message);
      return res.status(500).json({ message: this.internalErrorMsg });
    }
  }
}

export default BookController;