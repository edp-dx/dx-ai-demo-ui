import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BadgesDashboard from './components/BadgesDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders BadgesDashboard without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgesDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
