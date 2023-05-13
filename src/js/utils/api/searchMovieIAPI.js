/**
 * Send search movie request
 *
 * @return {Promise<*>}
 */
export const sendSearchMovieRequestAPI = async ({ movieName, movieYear }) => {
  const { REACT_APP_OMDB_API_URL: apiUrl, REACT_APP_OMDB_API_KEY: apiKey } = process.env;

  const namePart = `?t=${movieName.replace(/\s/g, '+')}`;
  const yearPart = movieYear ? `&y=${movieYear}` : '';
  const apiKeyPart = `&apikey=${apiKey}`;

  const fullUrl = apiUrl + namePart + yearPart + apiKeyPart;

  const res = await fetch(fullUrl);

  if (!res.ok) {
    throw new Error('Some error occurred.. try later.');
  }

  return res.json();
};
