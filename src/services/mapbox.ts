import { GeocodingLocation } from '../interfaces';

const apiBaseURL = 'https://api.mapbox.com/geocoding/v5';
const accessToken = `access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;

const placesURL = 'mapbox.places';

export const fetchLocal = (
  local: string,
  languageCode = 'en'
): Promise<{ features: GeocodingLocation[] }> => {
  return fetch(
    `${apiBaseURL}/${placesURL}/${local}.json?language=${languageCode}&${accessToken}`
  )
    .then((response) => response.json())
    .then((data) => data);
};
