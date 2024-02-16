import React from 'react';
import ReactDOM from 'react-dom';
import BadgesDashboard from './BadgesDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgesDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Additional tests would be added here to verify the functionality