import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: []
  };

  componentDidMount() {
    fetch('https://ai-demo-app-dx-dev-ai-demo-app-dev.eks-sandbox.aws.main.edp.projects.epam.com/badges')
      .then(response => response.json())
      .then(data => this.setState({ badges: data }))
      .catch(error => console.error('Error fetching badges:', error));
  }

  render() {
    const { badges } = this.state;
    return (
      <div className="badges-dashboard">
        {badges.map(badge => (
          <div key={badge.badgeId} className="badge">
            <img src={badge.badgeImage} alt={badge.badgeName} className="badge-image" />
            <h3 className="badge-name">{badge.badgeName}</h3>
            <p className="badge-description">{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

BadgesDashboard.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.shape({
    badgeId: PropTypes.number.isRequired,
    badgeName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badgeImage: PropTypes.string.isRequired
  }))
};

export default BadgesDashboard;
