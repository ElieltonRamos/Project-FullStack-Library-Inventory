import { LoggedUser } from "./user";

export type StatusBook = 'available' | 'checkout';

interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
  status: StatusBook;
  checkoutUser: number | null;
  bookBorrowedUser?: LoggedUser;
}

export type CreateBook = Omit<Book, 'id' | 'status' | 'checkoutUser' |  'bookBorrowedUser'>;

export default Book;