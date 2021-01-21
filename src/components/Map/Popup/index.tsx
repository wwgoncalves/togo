import React from 'react';
import { FaLocationArrow, FaPen, FaTimes } from 'react-icons/fa';

import { Place } from './../../../interfaces';

import { Container, Content, Actions } from './styles';

interface PopupProps {
  children?: React.ReactNode;
  place: Place;
}

const Popup: React.FC<PopupProps> = ({ place }: PopupProps) => {
  return (
    <Container closeButton={false} minWidth={250} maxWidth={250}>
      <Content>
        <h3>{place.name}</h3>
        <p>
          {place.address} {place.complement ? `- ${place.complement}` : ''}
        </p>
        <Actions>
          <div>
            <button>
              <FaPen color={'#fff'} /> {'Edit'}
            </button>
            <button>
              <FaTimes color={'#f00'} /> {'Delete'}
            </button>
          </div>
          <button
            onClick={() => {
              window.open(
                `https://www.google.com/maps/dir//${place.latitude},${place.longitude}`,
                '_blank'
              );
            }}
          >
            <FaLocationArrow color={'#fff'} /> {'Go'}
          </button>
        </Actions>
      </Content>
    </Container>
  );
};

export default Popup;
