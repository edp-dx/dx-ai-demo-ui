import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BadgesDashboard from './BadgesDashboard';

describe('BadgesDashboard', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { asFragment } = render(<BadgesDashboard />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Additional tests can be implemented here
});