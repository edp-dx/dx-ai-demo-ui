import React, { useState, useEffect } from 'react';
import './BadgesDashboard.css';

function BadgesDashboard() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    fetch('https://ai-demo-app-dx-dev-ai-demo-app-dev.eks-sandbox.aws.main.edp.projects.epam.com/badges')
      .then(response => response.json())
      .then(data => setBadges(data))
      .catch(error => console.error('Error fetching badges:', error));
  }, []);

  return (
    <div className="badges-dashboard">
      {badges.map(badge => (
        <div key={badge.badgeId} className="badge-item">
          <img src={badge.badgeImage} alt={badge.badgeName} />
          <h3>{badge.badgeName}</h3>
          <p>{badge.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BadgesDashboard;
