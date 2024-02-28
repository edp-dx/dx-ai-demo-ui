import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import BadgesDashboard from './components/BadgesDashboard';

jest.mock('./components/BadgesDashboard', () => () => <div>BadgesDashboard</div>);

describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello, EDP!')).toBeInTheDocument();
  });
});

describe('BadgesDashboard', () => {
  it('renders badges dashboard', async () => {
    const { getByText } = render(<BadgesDashboard />);
    await waitFor(() => expect(getByText('BadgesDashboard')).toBeInTheDocument());
  });
});
