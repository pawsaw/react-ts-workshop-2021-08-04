import React from 'react';

import { Book } from '../../../domain';
import { BookListItem } from './BookListItem/BookListItem';

export interface OnBookSelected {
  (book: Book): void;
}

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = () => {} }) => {
  return <div>
    {
      books.map((book: Book) =>
        <> 
          <BookListItem key={book.title} book={book} />
          <a href="#" onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            onBookSelected(book);
          }}>Show</a>
        </>)
    }
  </div>
};
