import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BadgesDashboard from './BadgesDashboard';

afterEach(cleanup);

it('renders without crashing', () => {
  const { getByText } = render(<BadgesDashboard />);
  expect(getByText('Badges Dashboard')).toBeInTheDocument();
});

// Additional tests would go here