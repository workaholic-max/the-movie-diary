/**
 * Send search movie request
 *
 * @param movieTitle {String}
 * @param movieYear {Number}
 * @param movieImdbID {String}
 *
 * @return {Promise<*>}
 */
export const sendSearchMovieRequestAPI = async ({ movieTitle, movieYear, movieImdbID }) => {
  const { REACT_APP_OMDB_API_URL: apiUrl, REACT_APP_OMDB_API_KEY: apiKey } = process.env;

  const getQueryPart = () => {
    if (movieImdbID) {
      return `?i=${movieImdbID}`;
    }

    const titlePart = `?t=${movieTitle.replace(/\s/g, '+')}`;
    const yearPart = movieYear ? `&y=${movieYear}` : '';

    return titlePart + yearPart;
  };

  const apiKeyPart = `&apikey=${apiKey}`;

  const fullUrl = apiUrl + getQueryPart() + apiKeyPart;

  const res = await fetch(fullUrl);

  if (!res.ok) {
    throw new Error('Some error occurred.. try later.');
  }

  return res.json();
};
