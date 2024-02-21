import React from 'react';
import { render } from '@testing-library/react';
import BadgesDashboard from './BadgesDashboard';

test('renders without crashing', () => {
  const { getByText } = render(<BadgesDashboard />);
  expect(getByText(/loading/i)).toBeInTheDocument();
});

// Additional tests to verify the behavior of the component would go here