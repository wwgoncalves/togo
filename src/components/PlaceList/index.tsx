import React from 'react';
import Leaflet from 'leaflet';
import { useTranslation } from 'react-i18next';

import { Place } from './../../interfaces';

import { Container } from './styles';

interface PlaceListProps {
  children?: React.ReactNode;
  map: Leaflet.Map | null;
  placesToGo: Place[];
}

const PlaceList: React.FC<PlaceListProps> = ({
  map,
  placesToGo,
}: PlaceListProps) => {
  const { t } = useTranslation();

  const setViewOn = (place: Place) => {
    if (!map) return;

    map.setView([place.latitude, place.longitude], map.getZoom(), {
      animate: true,
    });
    return null;
  };

  return (
    <>
      {placesToGo.length > 0 && (
        <Container>
          <h3>{t('Places saved')}</h3>
          <div>
            <ul>
              {placesToGo.map((place: Place) => (
                <li key={place.id}>
                  <span>{place.name}</span>
                  <span onClick={() => setViewOn(place)}>{place.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      )}
    </>
  );
};

export default PlaceList;
