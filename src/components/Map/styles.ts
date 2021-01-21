import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Container = styled(MapContainer)`
  /* Leaflet classes */
  &.leaflet-container {
    z-index: 0;
  }
`;
