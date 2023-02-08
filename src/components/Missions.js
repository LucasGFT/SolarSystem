import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../css/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="test">
        <Title headline="Missões" />
        <div className="missions" data-testid="missions">
          <br />
          {missions.map((missao) => (
            <MissionCard
              key={ missao.name }
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              destination={ missao.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
