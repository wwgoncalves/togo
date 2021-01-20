import React, { useState } from 'react';

import { Place, Position } from './../../interfaces';

import PlaceForm from './../../components/PlaceForm';
import Map from './../../components/Map';

import { Container } from './styles';

const initialPosition = { lat: -30.034647, lng: -51.217659 };

const Main: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [placesToGo, setPlacesToGo] = useState<Place[]>([]);

  return (
    <Container>
      <main>
        <PlaceForm
          position={position}
          placesToGo={placesToGo}
          setPosition={setPosition}
          setPlacesToGo={setPlacesToGo}
        />
      </main>

      <Map
        initialPosition={initialPosition}
        position={position}
        placesToGo={placesToGo}
      />
    </Container>
  );
};

export default Main;
