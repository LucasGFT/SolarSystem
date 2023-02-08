import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="title">
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar">
          {Planets.map((p) => {
            const { name } = p;
            const n = name;
            return <PlanetCard key={ n } planetName={ n } planetImage={ p.image } />;
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
