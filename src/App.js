import React from 'react';
import './styles/index.css';
import logo from './assets/images/skf-logo-blue.svg'; // Adjusted path to the new logo

function App() {
  return (
      <div className="container">
        <header className="header">
          <img src={logo} alt="SKF Logo" className="logo" />
          <div className="header-right">
            <div className="user-icon">JD</div>
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-role">, Admin</span>
            </div>
          </div>
        </header>
        <div className="title">
          Rotating Equipment Performance Center
        </div>
        <main className="main">
          <div className="card">
            <div className="card-header">
              <img src={logo} alt="SKF Logo" className="card-logo" />
              <span className="card-title">@ptitude Observer</span>
            </div>
            <div className="card-footer">
              @ptitude Observer <span className="arrow">></span>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={logo} alt="SKF Logo" className="card-logo" />
              <span className="card-title">@ptitude Analyst</span>
            </div>
            <div className="card-footer">
              @ptitude Analyst <span className="arrow">></span>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={logo} alt="SKF Logo" className="card-logo" />
              <span className="card-title">Machine Health Viewer</span>
            </div>
            <div className="card-footer">
              Machine Health Viewer <span className="arrow">></span>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;
