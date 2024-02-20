import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import BadgesDashboard from './components/BadgesDashboard';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('BadgesDashboard renders without crashing', () => {
  const { getByText } = render(<BadgesDashboard />);
  expect(getByText('Hello, EDP!')).toBeInTheDocument();
});
