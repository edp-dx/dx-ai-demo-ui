import React from 'react';
import { render, screen } from '@testing-library/react';
import BadgesDashboard from './BadgesDashboard';

describe('BadgesDashboard', () => {
  it('renders without crashing', () => {
    render(<BadgesDashboard />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // Additional tests can be added here
  // For example, you could mock the fetch call and test error and success states
});
