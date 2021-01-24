import React from 'react';
import { useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';

import { Place } from './../../interfaces';

import { Container } from './styles';

const SetViewOnPosition = (props: any) => {
  const { coords } = props;
  console.log(coords);

  const map = useMap();
  console.log(map);

  map.setView(coords, map.getZoom(), { animate: true });

  return null;
};

interface PlaceListProps {
  children?: React.ReactNode;
  placesToGo: Place[];
}

const PlaceList: React.FC<PlaceListProps> = ({
  placesToGo,
}: PlaceListProps) => {
  const { t } = useTranslation();

  return (
    <>
      {placesToGo.length > 0 && (
        <Container>
          <h3>{t('Places saved')}</h3>
          <ul>
            {placesToGo.map((place: Place) => (
              <li key={place.id}>
                <span>{place.name}</span>
                <span
                  onClick={() => {
                    return (
                      <SetViewOnPosition
                        coords={[place.latitude, place.longitude]}
                      />
                    );
                  }}
                >
                  {place.address}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
};

export default PlaceList;
