import { LoggedUser } from "./user";

export default interface Book {
  id: number;
  title: string;
  description: string;
  image?: string;
  status: string;
  CheckoutUser?: LoggedUser;
}

export type CreateBook = Omit<Book, 'id'>;