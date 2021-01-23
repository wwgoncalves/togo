import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Container = styled(MapContainer)`
  /* Leaflet classes */
  &.leaflet-container {
    z-index: 0;
  }

  .marker-cluster div {
    color: #fff;
    font: 700 14px 'Nunito', sans-serif;
  }

  .marker-cluster-custom-small {
    background-color: rgba(220, 110, 255, 0.6);
  }
  .marker-cluster-custom-small div {
    background-color: rgba(120, 120, 255, 0.6);
  }

  .marker-cluster-custom-medium {
    background-color: rgba(160, 80, 255, 0.6);
  }
  .marker-cluster-custom-medium div {
    background-color: rgba(90, 90, 255, 0.6);
  }

  .marker-cluster-custom-large {
    background-color: rgba(100, 50, 255, 0.6);
  }
  .marker-cluster-custom-large div {
    background-color: rgba(20, 20, 255, 0.6);
  }
`;
