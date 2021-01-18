const apiBaseURL = 'https://api.mapbox.com/geocoding/v5';
const accessToken = `access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;

const placesURL = 'mapbox.places';

export const fetchLocal = (local: string) => {
  return fetch(`${apiBaseURL}/${placesURL}/${local}.json?${accessToken}`)
    .then((response) => response.json())
    .then((data) => data);
};
