import React from 'react';
import { BookList, OnBookSelected } from './BookList';
import { Book, useBooks } from '../../domain';
import { useHistory } from 'react-router-dom';

export const BooksScreen: React.FC = () => {

  const books: Book[] | null = useBooks();
  const history = useHistory();

  const onBookSelected: OnBookSelected = (book: Book) => {
    history.push(`/books/${book.isbn}`);
  };

  return <div>
    <h2>Bookmanager</h2>
    {
        books ? (
          <BookList books={books} onBookSelected={onBookSelected} />
        ) : (
          <span>Loading book...</span>
        )
      }

  </div>
}