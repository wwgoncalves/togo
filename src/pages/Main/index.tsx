import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './../../i18n/config';
import { Place, Position } from './../../interfaces';

import PlaceForm from './../../components/PlaceForm';
import Map from './../../components/Map';

import { Container } from './styles';

const initialPosition = { lat: -30.034647, lng: -51.217659 };

const Main: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [placesToGo, setPlacesToGo] = useState<Place[]>([]);
  const [placeOnEditing, setPlaceOnEditing] = useState<Place | null>(null);

  const { t, i18n } = useTranslation();
  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const onEdit = (place: Place) => {
    setPlaceOnEditing(place);
  };

  const onDelete = (placeToDelete: Place) => {
    if (window.confirm(`${t('Delete place')} "${placeToDelete.name}"?`)) {
      setPlacesToGo((prevPlacesToGo) =>
        prevPlacesToGo.filter((place) => place !== placeToDelete)
      );
    }
  };

  return (
    <Container>
      <header style={{ position: 'absolute', bottom: 0, zIndex: 2 }}>
        <button type="button" onClick={() => changeLanguage('en')}>
          {t('English')}
        </button>
        <button type="button" onClick={() => changeLanguage('pt')}>
          {t('Portuguese')}
        </button>
      </header>
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
