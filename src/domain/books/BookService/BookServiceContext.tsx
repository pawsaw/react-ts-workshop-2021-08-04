import { createContext, useContext } from 'react';
import { BookService } from './BookService';
import { DefaultBookService } from './DefaultBookService';

const defaultBookService: BookService = new DefaultBookService();

const BookServiceContext = createContext<BookService>(defaultBookService);

export interface BookServiceProviderProps {
  bookService?: BookService;
}

export const BookServiceProvider: React.FC<BookServiceProviderProps> = ({ bookService = defaultBookService, children }) => {

  return <BookServiceContext.Provider value={bookService}>
    {children}
  </BookServiceContext.Provider>
};

export function useBookService(): BookService {
  return useContext(BookServiceContext);
}
