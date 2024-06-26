import BookModelSequelize from '../database/models/bookModelSequelize';
import UserModelSequelize from '../database/models/userModelSequelize';
import Book from '../interfaces/book';
import databaseModel from '../interfaces/databaseModel';

class BookModel implements databaseModel<Book> {
  private model = BookModelSequelize;

  async create(data: Book): Promise<Book> {
    const newBook = await this.model.create(data);
    return newBook.dataValues;
  }

  async findAll(): Promise<Book[]> {
    const responseDB = await this.model.findAll({
      attributes: { exclude: ['description', 'checkoutUser'] },
      order: [['id', 'DESC']]
    });
    const allBooks = responseDB.map((book) => book.dataValues);
    return allBooks;
  }

  async findById(id: number): Promise<Book | null> {
    const book = await this.model.findByPk(id, {
      attributes: { exclude: ['checkoutUser'] },
      include: {
        model: UserModelSequelize,
        as: 'bookBorrowedUser',
        attributes: ['id', 'userName']
      }});

    if (!book) return null;
    
    return book.dataValues;
  }

  async findOne(field: string, value: string): Promise<Book | null> {
    const book = await this.model.findOne({ where: { [field]: value } });
    if (!book) return null;
    return book.dataValues;
  }

  async update(id: number, data: Book): Promise<number> {
    const responseDB = await this.model.update(data, { where: { id } });
    return responseDB[0];
  }

  async delete(id: number): Promise<number> {
    const responseDB = await this.model.destroy({ where: { id } });
    return responseDB;
  }
}

export default BookModel;