import axios from 'axios';

const API_KEY = '34020609-8fd5e6226221618c5d9372e77';

const getPhotos = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
    key: API_KEY,
  },
});

export const fetchPhotos = async (query, page) => {
  return await getPhotos.get(`?q=${query}&page=${page}`);
};
