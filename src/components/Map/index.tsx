import React from 'react';
import Leaflet from 'leaflet';
import { Marker, TileLayer, useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';

import Popup from './Popup';
import { Place, Position } from './../../interfaces';

import mapLocation from './../../assets/location.svg';
import mapMark from './../../assets/mark.svg';

import 'leaflet/dist/leaflet.css';
import { Container } from './styles';

const SetViewOnPosition = (props: any) => {
  const { coords } = props;

  const map = useMap();
  map.setView(coords, map.getZoom(), { animate: true });

  return null;
};

const mapLocationIcon = Leaflet.icon({
  iconUrl: mapLocation,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});
const mapMarkIcon = Leaflet.icon({
  iconUrl: mapMark,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

interface MapProps {
  children?: React.ReactNode;
  initialPosition: Leaflet.LatLngLiteral;
  position: Position | null;
  placesToGo: Place[];
  onEdit: (place: Place) => void;
  onDelete: (placeToDelete: Place) => void;
}

const Map: React.FC<MapProps> = ({
  initialPosition,
  position,
  placesToGo,
  onEdit,
  onDelete,
}: MapProps) => {
  const { t } = useTranslation();

  return (
    <Container
      center={initialPosition}
      zoom={14}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={`${t(
          'Map data'
        )} &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ${t(
          'contributors'
        )} ${t('and')} <a href="https://www.mapbox.com/">Mapbox</a>, ${t(
          'Icons'
        )} &copy; <a href="https://www.flaticon.com/authors/freepik">Freepik</a>`}
      />

      {position && (
        <Marker
          icon={mapLocationIcon}
          position={[position.latitude, position.longitude]}
        ></Marker>
      )}

      {placesToGo &&
        placesToGo.map((place) => (
          <Marker
            key={place.id}
            icon={mapMarkIcon}
            position={[place.latitude, place.longitude]}
          >
            <Popup
              place={place}
              onEdit={() => onEdit(place)}
              onDelete={() => onDelete(place)}
            />
          </Marker>
        ))}
      {position && (
        <SetViewOnPosition coords={[position.latitude, position.longitude]} />
      )}
    </Container>
  );
};

export default Map;
