import React, { FormEvent, useState, useRef } from 'react';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import Leaflet from 'leaflet';
import { v4 as uuidv4 } from 'uuid';
import AsyncSelect from 'react-select/async';

import mapLocation from './../../assets/location.svg';
import mapMark from './../../assets/mark.svg';

import 'leaflet/dist/leaflet.css';
import { Container } from './styles';

import { fetchLocal } from './../../services/mapbox';

const initialPosition = { lat: -30.034647, lng: -51.217659 };

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

interface Places {
  id: string;
  name: string;
  address: string;
  complement: string;
  latitude: number;
  longitude: number;
}
// type Location = {
//   lat: number;
//   lng: number;
// };

type Position = {
  latitude: number;
  longitude: number;
};

type Address = {
  label: string;
  value: string;
};

function SetViewOnPosition(props: any) {
  const { coords } = props;

  const map = useMap();
  map.setView(coords, map.getZoom(), { animate: true });

  return null;
}

const Main: React.FC = () => {
  const [placesToGo, setPlacesToGo] = useState<Places[]>([]);

  // const [location, setLocation] = useState<Location | null>(null);
  const [position, setPosition] = useState<Position | null>(null);

  const [name, setName] = useState('');
  const [address, setAddress] = useState<Address | null>(null);
  const [complement, setComplement] = useState('');

  const loadOptions = async (inputValue: any, callback: any) => {
    if (inputValue.length < 3) return;

    const responseData: any = await fetchLocal(inputValue);
    let places: any = [];

    responseData.features.map((item: any) => {
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name,
      });
    });

    callback(places);
  };

  const handleChangeSelect = (event: any) => {
    // setLocation({
    //   lat: event.coords[1],
    //   lng: event.coords[0],
    // });

    setPosition({
      latitude: event.coords[1],
      longitude: event.coords[0],
    });

    setAddress({
      label: event.place,
      value: event.place,
    });
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!address || !name) return;

    setPlacesToGo([
      ...placesToGo,
      {
        id: uuidv4(),
        name,
        address: address?.value || '',
        complement,
        latitude: position?.latitude || 0,
        longitude: position?.longitude || 0,
      },
    ]);

    setName('');
    setAddress(null);
    setComplement('');
    setPosition(null);
  }

  return (
    <Container>
      <main>
        <form onSubmit={handleSubmit} className="landing-page-form">
          <fieldset>
            <legend>Place to go</legend>

            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Place name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="address">Address</label>
              <AsyncSelect
                id="address"
                placeholder="Place or place's address"
                value={address}
                onChange={handleChangeSelect}
                classNamePrefix="filter"
                cacheOptions
                loadOptions={loadOptions}
                noOptionsMessage={() => 'No options'}
              />
            </div>

            <div className="input-block">
              <label htmlFor="complement">Complement</label>
              <input
                id="complement"
                placeholder="Block, building, floor etc"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
              />
            </div>
          </fieldset>

          <button type="submit" className="confirm-button">
            Save
          </button>
        </form>
      </main>

      <MapContainer
        center={initialPosition}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution={
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors and <a href="https://www.mapbox.com/">Mapbox</a>, Icons &copy; <a href="https://www.flaticon.com/authors/freepik">Freepik</a>'
          }
        />

        {position && (
          <Marker
            icon={mapLocationIcon}
            position={[position.latitude, position.longitude]}
          ></Marker>
        )}

        {placesToGo.length > 0 &&
          placesToGo.map((place) => (
            <Marker
              key={place.id}
              icon={mapMarkIcon}
              position={[place.latitude, place.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                <div>
                  <h3>{place.name}</h3>
                  <p>
                    {place.address} - {place.complement}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        {position && (
          <SetViewOnPosition coords={[position.latitude, position.longitude]} />
        )}
      </MapContainer>
    </Container>
  );
};

export default Main;
