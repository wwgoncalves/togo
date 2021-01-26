import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AsyncSelect from 'react-select/async';
import { OptionsType, ValueType } from 'react-select';
import { useTranslation } from 'react-i18next';

import {
  Address,
  Place,
  Position,
  GeocodingLocation,
} from './../../interfaces';

import { fetchLocal } from './../../services/mapbox';

import { Container, Actions } from './styles';

interface PlaceFormProps {
  children?: React.ReactNode;
  position: Position | null;
  placesToGo: Place[] | undefined;
  placeOnEditing: Place | null;
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
  setPlacesToGo: React.Dispatch<React.SetStateAction<Place[] | undefined>>;
  setPlaceOnEditing: React.Dispatch<React.SetStateAction<Place | null>>;
  open: boolean;
}

const PlaceForm: React.FC<PlaceFormProps> = ({
  position,
  placesToGo,
  placeOnEditing,
  setPosition,
  setPlacesToGo,
  setPlaceOnEditing,
  open,
}: PlaceFormProps) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState<Address | null>(null);
  const [complement, setComplement] = useState('');

  const { t, i18n } = useTranslation();

  const loadOptions = async (
    inputValue: string,
    callback: (options: OptionsType<Address>) => void
  ) => {
    if (inputValue.length < 3) return;

    const responseData = await fetchLocal(inputValue, i18n.language);
    const places: Address[] = [];

    responseData.features.map((item: GeocodingLocation) => {
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name,
      });
    });

    callback(places);
  };

  const handleChangeSelect = (event: ValueType<Address, false>) => {
    if (!event || !event.coords || !event.place) return;

    setPosition({
      latitude: event.coords[1],
      longitude: event.coords[0],
    });

    setAddress({
      label: event.place,
      value: event.place,
    });
  };

  async function handleReset(event: React.FormEvent) {
    event.preventDefault();

    setPlaceOnEditing(null);

    setPosition(null);
    setName('');
    setAddress(null);
    setComplement('');
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!address || !name) return;

    if (placeOnEditing) {
      if (placesToGo) {
        const prevPlacesToGo = [...placesToGo];
        const placeOnEditingIndex = prevPlacesToGo.indexOf(placeOnEditing);
        if (placeOnEditingIndex >= 0) {
          prevPlacesToGo[placeOnEditingIndex] = {
            id: placeOnEditing.id,
            name,
            address: address?.value || '',
            complement,
            latitude: position?.latitude || 0,
            longitude: position?.longitude || 0,
          };

          setPlacesToGo(prevPlacesToGo);
        }
      }
    } else {
      setPlacesToGo([
        ...(placesToGo ?? []),
        {
          id: uuidv4(),
          name,
          address: address?.value || '',
          complement,
          latitude: position?.latitude || 0,
          longitude: position?.longitude || 0,
        },
      ]);
    }

    setPlaceOnEditing(null);

    setPosition(null);
    setName('');
    setAddress(null);
    setComplement('');
  }

  useEffect(() => {
    if (placeOnEditing) {
      setPosition({
        latitude: placeOnEditing.latitude,
        longitude: placeOnEditing.longitude,
      });
      setName(placeOnEditing.name);
      setAddress({
        label: placeOnEditing.address,
        value: placeOnEditing.address,
      });
      setComplement(placeOnEditing.complement);
    }
  }, [placeOnEditing]);

  return (
    <>
      {open && (
        <Container
          onSubmit={handleSubmit}
          onReset={handleReset}
          autoComplete={'off'}
        >
          <fieldset>
            <legend>{t('Place to go')}</legend>

            <div className="input-block">
              <label htmlFor="name">{t('Name')}</label>
              <input
                id="name"
                placeholder={t('A name for the place')}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="address">{t('Address')}</label>
              <AsyncSelect
                id="address"
                placeholder={t('Place or its address')}
                value={address}
                onChange={handleChangeSelect}
                classNamePrefix="filter"
                cacheOptions
                loadOptions={loadOptions}
                noOptionsMessage={() => t('No option found')}
              />
            </div>

            <div className="input-block">
              <label htmlFor="complement">{t('Complement')}</label>
              <input
                id="complement"
                placeholder={t('Block, building, floor etc')}
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
              />
            </div>
          </fieldset>

          <Actions>
            {placeOnEditing && (
              <button type="reset" className="reset-button">
                {t('Cancel')}
              </button>
            )}
            <button type="submit" className="save-button">
              {t('Save')}
            </button>
          </Actions>
        </Container>
      )}
    </>
  );
};

export default PlaceForm;
