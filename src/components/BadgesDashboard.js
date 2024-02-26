import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BadgesDashboard.css';

const BadgesDashboard = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('https://ai-demo-app-dx-dev-ai-demo-app-dev.eks-sandbox.aws.main.edp.projects.epam.com/badges');
        setBadges(response.data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };
    fetchBadges();
  }, []);

  return (
    <div className='badges-dashboard'>
      {badges.map(badge => (
        <div key={badge.badgeId} className='badge-item'>
          <img src={badge.badgeImage} alt={badge.badgeName} />
          <h3>{badge.badgeName}</h3>
          <p>{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BadgesDashboard;
