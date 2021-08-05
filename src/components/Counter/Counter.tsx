import React from 'react';

export interface OnValueChanged {
  (currentValue: number): void;
}

export interface CounterProps {
  value: number;
  onValueChanged: OnValueChanged;
}


export const Counter: React.FC<CounterProps> = ({ value, onValueChanged}) => {

  const increment = () => {
    onValueChanged(value + 1);
  };

  const decrement = () => {
    onValueChanged(value - 1);
  };

  return (
    <div>
      <button onClick={decrement}>
        -
      </button>
      {value}
      <button onClick={increment}>
        +
      </button>
    </div>
  );
};