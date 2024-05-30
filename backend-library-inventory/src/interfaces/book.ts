interface Book {
  id?: number;
  title: string;
  description: string;
  image: string;
  status: string;
}

export type NewBook = Omit<Book, 'id'>;

export default Book;