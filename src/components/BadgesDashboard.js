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
            <img src={badge.badgeImage} alt={badge.badgeName} />
            <h3>{badge.badgeName}</h3>
            <p>ID: {badge.badgeId}</p>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
