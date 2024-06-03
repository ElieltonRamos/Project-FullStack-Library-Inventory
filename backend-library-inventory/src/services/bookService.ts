import Book, { StatusBook } from '../interfaces/book';
import databaseModel from '../interfaces/databaseModel';
import { ServiceResponse } from '../interfaces/responses';

class BookService {
  private internalError = 'internal server error';
  private msgInvalidId = 'Invalid bookId';
  private msgBookNotFound = 'Book not found';
  constructor(
    private bookModel: databaseModel<Book>,
  ) { }

  async createBook(book: Book): ServiceResponse<Book> {
    const { title } = book;
    const bookExists = await this.bookModel.findOne('title', title);
    if (bookExists) return { status: 'conflict', data: { message: 'Book already exists' } };

    const newBook = await this.bookModel.create({ ...book, status: 'available' });

    if (!newBook.id) return { status: 'internalError', data: { message: 'internal server error' } };

    return { status: 'created', data: newBook };
  }

  async listAllBooks(): ServiceResponse<Book[]> {
    const books = await this.bookModel.findAll();
    return { status: 'ok', data: books };
  }

  async findBookId(id: number): ServiceResponse<Book> {
    if (isNaN(id)) return { status: 'badRequest', data: { message: this.msgInvalidId } };
    const book = await this.bookModel.findById(id);
    if (!book) return { status: 'notFound', data: { message: this.msgBookNotFound } };

    return { status: 'ok', data: book };
  }

  async updateBook(bookId: number, book: Book): ServiceResponse<Book> {
    if (isNaN(bookId)) return { status: 'badRequest', data: { message: this.msgInvalidId } };
    const bookExists = await this.bookModel.findOne('id', bookId);
    if (!bookExists) return { status: 'notFound', data: { message: this.msgBookNotFound } };

    const updatedBook = {
      title: book.title || bookExists.title,
      description: book.description || bookExists.description,
      image: book.image || bookExists.image,
      status: book.status || bookExists.status,
    };

    const updated = await this.bookModel.update(bookId, updatedBook);
    if (updated === 0) return { status: 'internalError', data: { message: this.internalError } };

    return { status: 'ok', data: updatedBook };
  }

  async borrowThisBook(bookId: number, userId: number): ServiceResponse<Book> {
    const invalid = isNaN(bookId) || !userId;
    if (invalid) return { status: 'badRequest', data: { message: this.msgInvalidId } };

    const bookExists = await this.bookModel.findById(bookId);
    if (!bookExists) return { status: 'notFound', data: { message: this.msgBookNotFound } };

    const newStatus: StatusBook = 'checkout';
    const updatedBook =  { ...bookExists, checkoutUser: userId, status: newStatus };
    const resDB = await this.bookModel.update(bookId, updatedBook);
    if (resDB === 0) return { status: 'internalError', data: { message: this.internalError } };

    return { status: 'ok', data: { message: 'Book borrowed' } };
  }

  async giveBackBook(bookId: number): ServiceResponse<Book> {
    if (isNaN(bookId)) return { status: 'badRequest', data: { message: this.msgInvalidId } };

    const bookExists = await this.bookModel.findById(bookId);
    if (!bookExists) return { status: 'notFound', data: { message: this.msgBookNotFound } };

    const newStatus: StatusBook = 'available';
    const updatedBook = { ...bookExists, checkoutUser: undefined, status: newStatus };
    const resDB = await this.bookModel.update(bookId, updatedBook);
    if (resDB === 0) return { status: 'internalError', data: { message: this.internalError } };

    return { status: 'ok', data: { message: 'Book given back' } };
  }

  async deleteBook(bookId: number): ServiceResponse<Book> {
    if (isNaN(bookId)) return { status: 'badRequest', data: { message: this.msgInvalidId } };

    await this.bookModel.delete(bookId);
    const bookDeleted = await this.bookModel.findById(bookId);
    if (bookDeleted) return { status: 'internalError', data: { message: this.internalError } };

    return { status: 'ok', data: { message: 'Book deleted' } };
  }
}

export default BookService;