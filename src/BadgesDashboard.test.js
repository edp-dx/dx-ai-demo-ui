import React from 'react';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import BadgesDashboard from './BadgesDashboard';

describe('BadgesDashboard', () => {
  afterEach(cleanup);

  test('renders loading state initially', () => {
    render(<BadgesDashboard />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  // Additional tests would go here to mock fetch calls and user interaction such as selecting a badge
});