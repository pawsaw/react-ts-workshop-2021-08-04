import React from 'react';
import { useParams } from 'react-router';
import { BookDetail } from './BookDetail';
import { useBook } from '../../domain';

export interface BookDetailScreenParams {
  isbn: string;
}

export const BookDetailScreen: React.FC = () => {

  const { isbn } = useParams<BookDetailScreenParams>();
  const book = useBook(isbn);

  return <div>
    {
      book ? (
        <BookDetail book={book} />
      ) : (
        <span>Loading book...</span>
      )
    }
  </div>

}
