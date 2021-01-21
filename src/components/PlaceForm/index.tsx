import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AsyncSelect from 'react-select/async';

import { Address, Place, Position } from './../../interfaces';

import { fetchLocal } from './../../services/mapbox';

import { Container } from './styles';

interface PlaceFormProps {
  children?: React.ReactNode;
  position: Position | null;
  placesToGo: Place[];
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
  setPlacesToGo: React.Dispatch<React.SetStateAction<Place[]>>;
}

const PlaceForm: React.FC<PlaceFormProps> = ({
  position,
  placesToGo,
  setPosition,
  setPlacesToGo,
}: PlaceFormProps) => {
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
    setPosition({
      latitude: event.coords[1],
      longitude: event.coords[0],
    });

    setAddress({
      label: event.place,
      value: event.place,
    });
  };

  async function handleSubmit(event: React.FormEvent) {
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
    <Container onSubmit={handleSubmit}>
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

      <button type="submit" className="save-button">
        Save
      </button>
    </Container>
  );
};

export default PlaceForm;
