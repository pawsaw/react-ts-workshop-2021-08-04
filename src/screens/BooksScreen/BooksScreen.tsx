import React from 'react';
import { BookDetail } from '../../components/BookDetail';
import { BookList } from '../../components/BookList';
import { Book, useBooks, useBook } from '../../domain';

export const BooksScreen: React.FC = () => {

  const books: Book[] | null = useBooks();
  const book: Book | null = useBook('978-0-20163-361-0');

  return <div>
    <h2>Bookmanager</h2>
    {
        books ? (
          <BookList books={books} />
        ) : (
          <span>Loading book...</span>
        )
      }
      
      {
        book ? (
          <BookDetail book={book} />
        ) : (
          <span>Loading book...</span>
        )
      }

  </div>
}