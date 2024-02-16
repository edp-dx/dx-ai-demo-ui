import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import BadgesDashboard from './BadgesDashboard';

jest.mock('axios');

describe('BadgesDashboard', () => {
  it('renders without crashing', async () => {
    const badges = [
      { id: 1, name: 'Achiever', criteria: 'Completed all tasks', image: 'achiever.png' },
      // Other badges
    ];

    axios.get.mockResolvedValue({ data: badges });

    render(<BadgesDashboard />);

    await waitFor(() => expect(screen.getByText('Achiever')).toBeInTheDocument());
  });

  // Additional tests for interaction and error handling
});
