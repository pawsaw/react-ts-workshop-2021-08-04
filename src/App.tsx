import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList } from './components/BookList';
import { Book, useBook, useBooks } from './domain';



function App() {

  const books: Book[] | null = useBooks();
  const book: Book | null = useBook('978-0-20163-361-0');

  return (
    <div className="App">
      <h1>Bookmanager</h1>
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
  );
}

export default App;