import Book from '../interfaces/book';
import databaseModel from '../interfaces/databaseModel';
import { ServiceResponse } from '../interfaces/responses';

class BookService {
  private internalError = 'internal server error';
  constructor(private model: databaseModel<Book>) { }

  async createBook(book: Book): ServiceResponse<Book> {
    const { title } = book;
    const bookExists = await this.model.findOne('title', title);
    if (bookExists) return { status: 'conflict', data: { message: 'Book already exists' } };

    const newBook = await this.model.create({ ...book, status: 'available' });

    if (!newBook.id) return { status: 'internalError', data: { message: 'internal server error' } };

    return { status: 'created', data: newBook };
  }

  async listAllBooks(): ServiceResponse<Book[]> {
    const books = await this.model.findAll();
    return { status: 'ok', data: books };
  }

  async findBookId(id: number): ServiceResponse<Book> {
    if (isNaN(id)) return { status: 'badRequest', data: { message: 'Invalid bookId' } };
    const book = await this.model.findById(id);
    if (!book) return { status: 'notFound', data: { message: 'Book not found' } };

    return { status: 'ok', data: book };
  }

  async updateBook(bookId: number, book: Book): ServiceResponse<Book> {
    if (isNaN(bookId)) return { status: 'badRequest', data: { message: 'Invalid bookId' } };
    const bookExists = await this.model.findOne('id', bookId);
    if (!bookExists) return { status: 'notFound', data: { message: 'Book not found' } };

    const updatedBook = { 
      title: book.title || bookExists.title,
      description: book.description || bookExists.description,
      image: book.image || bookExists.image,
      status: book.status || bookExists.status,
    };

    const updated = await this.model.update(bookId, updatedBook);
    if (updated === 0) return { status: 'internalError', data: { message: this.internalError } };

    return { status: 'ok', data: updatedBook };
  }
}

export default BookService;