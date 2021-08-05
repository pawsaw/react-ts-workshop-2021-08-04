import { Book } from '../Book';
import { BookService } from './BookService';

export class DefaultBookService implements BookService {

  async books(): Promise<Book[]> {
    const response = await fetch(`http://localhost:4730/books`);
    return await response.json();
  }

  async book(isbn: string): Promise<Book> {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    return response.json();
  }

}