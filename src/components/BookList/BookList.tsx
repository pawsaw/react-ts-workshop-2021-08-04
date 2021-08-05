import React from 'react';
import { Book } from '../../domain';
import { BookListItem } from './BookListItem/BookListItem';

export interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return <div>
    {
      books.map((book: Book) => <BookListItem key={book.title} book={book} />)
    }
  </div>
};
