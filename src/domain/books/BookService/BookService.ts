import { Book, ISBN } from '../Book';

export interface BookService {
  books(): Promise<Book[]>;
  book(isbn: ISBN): Promise<Book>;
}