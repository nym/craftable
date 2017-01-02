import React from 'react';
import ReactDOM from 'react-dom';
import ItemColection from './ItemColection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemColection />, div);
});
