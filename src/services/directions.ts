import { Position } from './../interfaces';

export const getDirectionsURL = (position: Position): string => {
  return `https://www.google.com/maps/dir//${position?.latitude || ''},${
    position?.longitude || ''
  }`;
};
