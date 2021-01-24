import styled from 'styled-components';
import { Popup } from 'react-leaflet';

export const Container = styled(Popup)`
  /* .leaflet-popup {
    left: -140px !important;
  } */

  .leaflet-popup-content-wrapper {
    background: #fffe;
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content-wrapper .leaflet-popup-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;

export const Content = styled.div`
  h3 {
    line-height: 22px;
    color: #6060f0;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    line-height: 15px;
    color: #333;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  div {
    display: flex;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6060f0;
    padding: 5px 10px;
    color: #fff;
    border: 0;
    border-radius: 20px;
    font-size: 12px;

    transition: background-color 0.2s;

    svg {
      margin-right: 5px;
    }
  }

  button:not(:first-child) {
    margin-left: 5px;
  }

  button:hover {
    background-color: #6060f0dd;
  }
`;
