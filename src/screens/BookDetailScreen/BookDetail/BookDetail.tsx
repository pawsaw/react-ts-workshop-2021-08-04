import React from 'react';
import { Book } from '../../../domain';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {

  const { title, isbn, subtitle } = book;

  return <div>
    <h4>{isbn}</h4>
    <p>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </p>
  </div>
};