import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;:import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Fimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;limport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;uimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;:import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;gimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;:import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Fimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;limport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;uimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;:import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;gimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;jimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;:import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Uimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Fimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;limport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;uimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;:import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;jimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;ximport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;wimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;limport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;limport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;gimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Limport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Limport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Wimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;gimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;gimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;fimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;'import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;gimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;'import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;;import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;fimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;iimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;(import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;)import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;{import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;uimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;(import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;cimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;pimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;<import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;gimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;bimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;aimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;/import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;.import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;simport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;fimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;rimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;mimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;timport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;himport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;oimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;dimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;)import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;;import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;}import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;>import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard; import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Nimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Eimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;Wimport React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
    selectedBadge: null
  };

  componentDidMount() {
    fetch("https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/api/badges")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadgeDetail = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, isLoading, error, selectedBadge } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (selectedBadge) {
      return (
        <div className="badge-detail">
          <h2>{selectedBadge.name}</h2>
          <p>{selectedBadge.description}</p>
          <p>Awarded on: {selectedBadge.date}</p>
          <button onClick={() => this.setState({ selectedBadge: null })}>Back to badges</button>
        </div>
      );
    }

    return (
      <div className="badges-dashboard">
        {badges.map((badge) => (
          <div key={badge.id} className="badge" onClick={() => this.renderBadgeDetail(badge)}>
            <img src={badge.image} alt={badge.name} />
            <h3>{badge.name}</h3>
            <p>{badge.criteria}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;