import { useState, useEffect } from 'react';
import { Book, ISBN } from './Book';
import { useBookService } from './BookService';

export function useBook(isbn: ISBN): Book | null {
  const bookService = useBookService();
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {

    (async () => {
      setBook(null);
      const _book = await bookService.book(isbn);
      setBook(_book);
    })()

  }, [isbn, bookService]);
  return book;
}