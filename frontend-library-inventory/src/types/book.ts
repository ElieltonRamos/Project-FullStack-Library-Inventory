export default interface Book {
  id: number;
  title: string;
  description: string;
  image?: string;
  status: StatusBook;
}

export type StatusBook = 'Avaliable' | 'Checkout'

export type CreateBook = Omit<Book, 'id'>;