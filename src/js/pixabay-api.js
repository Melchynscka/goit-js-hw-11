const API_KEY = '43798487-cffd9f7a4f04e7c4b426bb2b8';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhoto = (queryString = 'flower') => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 6,
    q: queryString,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
