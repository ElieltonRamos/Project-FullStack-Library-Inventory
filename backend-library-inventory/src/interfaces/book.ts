interface Book {
  id?: number;
  title: string;
  description: string;
  image: string;
  status: string;
  checkoutUser?: { id: number; userName?: string; image?: string};
}

export type NewBook = Omit<Book, 'id'>;

export default Book;