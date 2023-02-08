import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './css/background.css';

class App extends React.Component {
  render() {
    return (
      <div className="teste">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
