import React, { useState } from 'react';

export interface OnValueChanged {
  (currentValue: number): void;
}

export interface CounterProps {
  initialValue?: number;
  onValueChanged?: OnValueChanged;
}

export const noop = () => {};

export const Counter: React.FC<CounterProps> = ({ initialValue = 100, onValueChanged = noop}) => {

  const [count, setCount] = useState(initialValue);


  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onValueChanged(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onValueChanged(newCount);
  };

  return (
    <div>
      <button onClick={decrement}>
        -
      </button>
      {count}
      <button onClick={increment}>
        +
      </button>
    </div>
  );
};