import Book from '../interfaces/book';
import databaseModel from '../interfaces/databaseModel';
import { ServiceResponse } from '../interfaces/responses';

class BookService {
  constructor(private model: databaseModel<Book>) { }

  async createBook(book: Book): ServiceResponse<Book> {
    const { title } = book;
    const bookExists = await this.model.findOne('title', title);
    if (bookExists) return { status: 'conflict', data: { message: 'Book already exists' } };

    const newBook = await this.model.create({...book, status: 'available'});

    if (!newBook.id) return { status: 'internalError', data: { message: 'internal server error' } };

    return { status: 'created', data: newBook };
  }
}

export default BookService;