import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/playground">Playground</Link></li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/playground">
            <PlaygroundScreen />
          </Route>
          <Route path="/books">
            <BooksScreen />
          </Route>
          <Redirect to="/books" />
        </Switch>
      </div>
    </div>
  );
}

export default App;