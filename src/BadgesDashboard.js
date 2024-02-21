import React, { Component } from 'react';
import './BadgesDashboard.css';

export default class BadgesDashboard extends Component {
  state = {
    badges: []
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/badges')
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
            <img src={badge.badgeImage} alt={badge.badgeName} />
            <h2>{badge.badgeName}</h2>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
