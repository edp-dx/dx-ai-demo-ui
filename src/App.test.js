import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import BadgesDashboard from './components/BadgesDashboard';

jest.mock('axios');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('BadgesDashboard', () => {
  it('renders without crashing', () => {
    act(() => {
      render(<BadgesDashboard />, container);
    });
  });
  // Additional tests would be added here
});

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
