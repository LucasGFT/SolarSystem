import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map((p) => {
            const { name } = p;
            const n = name;
            return <PlanetCard key={ n } planetName={ n } planetImage={ p.image } />;
          })
        }
      </div>
    );
  }
}

export default SolarSystem;
