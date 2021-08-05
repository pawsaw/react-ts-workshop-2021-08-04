import { count } from 'console';
import { useState } from 'react';
import './App.css';

import { Counter, OnValueChanged } from './components/Counter';
import { SimpleName } from './components/SimpleName';

function App() {

  const [value, setValue] = useState(33);

  const onCounterValueChanged: OnValueChanged = (currentValue: number) => setValue(currentValue);

  return (
    <div className="App">
      <h1>Hello Workshop</h1>
      <SimpleName />
      <Counter initialValue={value} onValueChanged={onCounterValueChanged} />
      <div>Counter value: {value}</div>
    </div>
  );
}

export default App;
