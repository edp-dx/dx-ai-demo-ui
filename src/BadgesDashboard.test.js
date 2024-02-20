import React from 'react';
import { shallow } from 'enzyme';
import BadgesDashboard from './BadgesDashboard';

describe('BadgesDashboard', () => {
  it('renders without crashing', () => {
    shallow(<BadgesDashboard />);
  });

  it('displays badges when data is provided', () => {
    const badges = [{ badgeId: 1, badgeName: "Super User", description: "Awarded for being a super user.", badgeImage: "/images/super_user.png" }];
    const wrapper = shallow(<BadgesDashboard />);
    wrapper.setState({ badges });
    expect(wrapper.find('.badge').length).toBe(badges.length);
  });
});