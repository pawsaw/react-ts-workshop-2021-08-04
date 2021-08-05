import { useState, useEffect } from 'react';
import { Book } from './Book';
import { useBookService } from './BookService';

export function useBooks(): Book[] | null {
  const bookService = useBookService();
  const [books, setBooks] = useState<Book[] | null>(null);
  useEffect(() => {

    (async () => {
      setBooks(null);
      const _books = await bookService.books();
      setBooks(_books);
    })()

  }, [bookService]);
  return books;
}