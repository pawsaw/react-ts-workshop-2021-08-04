import './App.css';
import { BookList } from './components/BookList';
import { books } from './data/books';


function App() {


  return (
    <div className="App">
      <h1>Bookmanager</h1>
      <BookList books={books} />      
    </div>
  );
}

export default App;
