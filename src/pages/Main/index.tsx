import React, { useState } from 'react';

import { Place, Position } from './../../interfaces';

import PlaceForm from './../../components/PlaceForm';
import Map from './../../components/Map';

import { Container } from './styles';

const initialPosition = { lat: -30.034647, lng: -51.217659 };

const Main: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [placesToGo, setPlacesToGo] = useState<Place[]>([]);
  const [placeOnEditing, setPlaceOnEditing] = useState<Place | null>(null);

  const onEdit = (place: Place) => {
    setPlaceOnEditing(place);
  };

  const onDelete = (placeToDelete: Place) => {
    if (window.confirm(`Delete place "${placeToDelete.name}"?`)) {
      setPlacesToGo((prevPlacesToGo) =>
        prevPlacesToGo.filter((place) => place !== placeToDelete)
      );
    }
  };

  return (
    <Container>
      <main>
        <PlaceForm
          position={position}
          placesToGo={placesToGo}
          placeOnEditing={placeOnEditing}
          setPosition={setPosition}
          setPlacesToGo={setPlacesToGo}
          setPlaceOnEditing={setPlaceOnEditing}
        />
      </main>

      <Map
        initialPosition={initialPosition}
        position={position}
        placesToGo={placesToGo}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Container>
  );
};

export default Main;
