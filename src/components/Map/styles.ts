import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Container = styled(MapContainer)`
  /* Leaflet classes */
  &.leaflet-container {
    z-index: 0;
  }

  .leaflet-popup-content-wrapper {
    background: #fffe;
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content h3 {
    margin: 8px 12px;
    color: #6060f0;
    font-size: 20px;
    font-weight: bold;
  }

  .leaflet-popup-content p {
    margin: 8px 12px;
    line-height: 15px;
    color: #333;
    font-size: 12px;
    font-weight: bold;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;
