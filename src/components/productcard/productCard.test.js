import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './productCard';

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<ProductCard />,div);
});
