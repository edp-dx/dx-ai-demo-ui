import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetch('<back-end URL>/badges')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { badges, isLoading, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="badges-dashboard">
        {badges.map(badge => (
          <div key={badge.badgeId} className="badge">
            <img src={badge.badgeImage} alt={badge.badgeName} className="badge-image" />
            <div className="badge-info">
              <h2>{badge.badgeName}</h2>
              <p>{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

BadgesDashboard.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.shape({
    badgeName: PropTypes.string,
    badgeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    badgeImage: PropTypes.string
  }))
};

export default BadgesDashboard;
