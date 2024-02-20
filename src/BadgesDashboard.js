import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: []
    };
  }

  componentDidMount() {
    fetch('<back-end URL>/badges')
      .then(response => response.json())
      .then(data => this.setState({ badges: data }));
  }

  render() {
    return (
      <div className="badges-dashboard">
        {this.state.badges.map(badge => (
          <div key={badge.badgeId} className="badge">
            <img src={badge.badgeImage} alt={badge.badgeName} />
            <h2>{badge.badgeName}</h2>
            <p>ID: {badge.badgeId}</p>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
