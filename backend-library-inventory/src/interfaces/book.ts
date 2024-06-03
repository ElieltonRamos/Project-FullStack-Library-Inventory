import User from './user';

export type StatusBook = 'available' | 'checkout';

interface Book {
  id?: number;
  title: string;
  description: string;
  image: string;
  status: StatusBook;
  checkoutUser: number | null;
  bookBorrowedUser?: User;
}

export type NewBook = Omit<Book, 'id'>;

export default Book;