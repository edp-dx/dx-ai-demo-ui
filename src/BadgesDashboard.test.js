import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BadgesDashboard from './BadgesDashboard';
import axios from 'axios';
jest.mock('axios');

describe('BadgesDashboard component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<BadgesDashboard />);
    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it('fetches badges successfully from an API', async () => {
    const badges = [
      { id: 1, title: 'Badge 1' },
      { id: 2, title: 'Badge 2' },
    ];
    axios.get.mockResolvedValue({ data: badges });
    const { findByText } = render(<BadgesDashboard />);

    expect(await findByText('Badge 1')).toBeInTheDocument();
    expect(await findByText('Badge 2')).toBeInTheDocument();
  });

  it('handles badge click events', () => {
    const handleBadgeClick = jest.fn();
    const { getByTestId } = render(<BadgesDashboard />);
    fireEvent.click(getByTestId('badge-id-1'));
    expect(handleBadgeClick).toHaveBeenCalledWith(1);
  });

  it('displays error message when API call fails', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockRejectedValue(new Error(errorMessage));
    const { findByText } = render(<BadgesDashboard />);

    expect(await findByText(errorMessage)).toBeInTheDocument();
  });
});
