import React from 'react';
import { render } from '@testing-library/react';
import BadgesDashboard from './BadgesDashboard';

test('renders without crashing', () => {
  const { container } = render(<BadgesDashboard />);
  expect(container).toBeTruthy();
});

// Additional tests to verify the behavior of the component would go here