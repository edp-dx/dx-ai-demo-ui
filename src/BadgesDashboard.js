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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;,import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;uimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;,import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;uimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;;import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;;import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;uimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;[import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;,import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;]import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;uimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;[import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;]import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;;import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;uimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;:import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;ximport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;vimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;vimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;kimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;ximport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;wimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;jimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;jimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;limport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;:import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;'import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;,import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;;import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;,import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;[import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;]import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;;import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;uimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;vimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;limport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;"import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;"import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;(import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;vimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;kimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;yimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;limport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;"import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;-import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;"import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;limport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;=import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;3import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;mimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;3import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;{import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;.import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;cimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;nimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;vimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;<import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;/import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;iimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;vimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;>import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;)import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;;import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;}import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;ximport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;pimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;fimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;uimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;limport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;timport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard; import React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;gimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;eimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;Dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;simport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;himport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;bimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;oimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;aimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;rimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;dimport React, { useState, useEffect } from 'react';
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

export default BadgesDashboard;;import React, { useState, useEffect } from 'react';
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