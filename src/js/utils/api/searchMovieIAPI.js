/**
 * Send search movie request
 *
 * @param movieTitle {String}
 * @param movieYear {Number}
 *
 * @return {Promise<*>}
 */
export const sendSearchMovieRequestAPI = async ({ movieTitle, movieYear }) => {
  const { REACT_APP_OMDB_API_URL: apiUrl, REACT_APP_OMDB_API_KEY: apiKey } = process.env;

  const titlePart = `?t=${movieTitle.replace(/\s/g, '+')}`;
  const yearPart = movieYear ? `&y=${movieYear}` : '';
  const apiKeyPart = `&apikey=${apiKey}`;

  const fullUrl = apiUrl + titlePart + yearPart + apiKeyPart;

  const res = await fetch(fullUrl);

  if (!res.ok) {
    throw new Error('Some error occurred.. try later.');
  }

  return res.json();
};
