import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Leaflet from 'leaflet';
import { FaSearchLocation, FaListUl } from 'react-icons/fa';

import './../../i18n/config';
import { Place, Position } from './../../interfaces';
import { usePersistentState } from '../../hooks/usePersistentState';

import PlaceForm from './../../components/PlaceForm';
import PlaceList from './../../components/PlaceList';
import Map from './../../components/Map';

import { Container } from './styles';

const initialPosition = { lat: -30.034647, lng: -51.217659 };

const Main: React.FC = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [placesToGo, setPlacesToGo] = usePersistentState<Place[]>(
    '@togo_placesToGo',
    []
  );
  const [placeOnEditing, setPlaceOnEditing] = useState<Place | null>(null);

  const [map, setMap] = useState<Leaflet.Map | null>(null);

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const onEdit = (place: Place) => {
    setPlaceOnEditing(place);
  };

  const onDelete = (placeToDelete: Place) => {
    if (window.confirm(`${t('Delete place')} "${placeToDelete.name}"?`)) {
      setPlacesToGo((prevPlacesToGo) => {
        if (prevPlacesToGo) {
          return prevPlacesToGo.filter((place) => place !== placeToDelete);
        }
        return prevPlacesToGo;
      });
    }
  };

  return (
    <Container>
      <main>
        <PlaceForm
          position={position}
          placesToGo={placesToGo}
          placeOnEditing={placeOnEditing}
          setPosition={setPosition}
          setPlacesToGo={setPlacesToGo}
          setPlaceOnEditing={setPlaceOnEditing}
          open={isFormOpen}
        />
        <PlaceList map={map} placesToGo={placesToGo} open={isListOpen} />
      </main>

      <Map
        initialPosition={initialPosition}
        position={position}
        placesToGo={placesToGo}
        onEdit={onEdit}
        onDelete={onDelete}
        setMap={setMap}
      />

      <aside>
        <button
          type="button"
          onClick={() => setIsFormOpen((prevValue) => !prevValue)}
          title={t('Search and save a place')}
          className={isFormOpen ? 'active' : ''}
        >
          <FaSearchLocation />
        </button>
        <button
          type="button"
          onClick={() => setIsListOpen((prevValue) => !prevValue)}
          title={t('List of saved places')}
          className={isListOpen && placesToGo?.length ? 'active' : ''}
          disabled={!placesToGo?.length}
        >
          <FaListUl />
        </button>
        {i18n.language === 'en' ? (
          <button
            type="button"
            onClick={() => changeLanguage('pt')}
            title={'Mudar idioma para português'}
          >
            {'por'}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            title={'Change language to English'}
          >
            {'eng'}
          </button>
        )}
      </aside>
    </Container>
  );
};

export default Main;
