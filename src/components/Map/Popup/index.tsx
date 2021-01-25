import React from 'react';
import { FaLocationArrow, FaPen, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { Place, Position } from './../../../interfaces';
import { getDirectionsURL } from './../../../services/directions';

import { Container, Content, Actions } from './styles';

interface PopupProps {
  children?: React.ReactNode;
  place: Place;
  onEdit: () => void;
  onDelete: () => void;
}

const Popup: React.FC<PopupProps> = ({
  place,
  onEdit,
  onDelete,
}: PopupProps) => {
  const { t } = useTranslation();

  const onGo = (position: Position) => {
    window.open(getDirectionsURL(position), '_blank');
  };

  return (
    <Container
      closeButton={false}
      minWidth={200}
      maxWidth={200}
      autoPan={false}
    >
      <Content>
        <h3>{place.name}</h3>
        <p>
          {place.address} {place.complement ? `- ${place.complement}` : ''}
        </p>
        <Actions>
          <div>
            <button onClick={onEdit}>
              <FaPen color={'#fff'} /> {t('Edit')}
            </button>
            <button onClick={onDelete}>
              <FaTimes color={'#f00'} /> {t('Delete')}
            </button>
          </div>
          <button
            onClick={() =>
              onGo({ latitude: place.latitude, longitude: place.longitude })
            }
          >
            <FaLocationArrow color={'#fff'} /> {t('Go')}
          </button>
        </Actions>
      </Content>
    </Container>
  );
};

export default Popup;
