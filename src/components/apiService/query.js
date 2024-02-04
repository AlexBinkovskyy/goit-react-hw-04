import axios from 'axios';

const ACCESS_KEY = 'Client-ID HGbT0DpGTed59sCna-QTm2ht1TZGiEGD-Z7j2y5epBc';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

axios.defaults.headers.common['Authorization'] = ACCESS_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const fetchQuery = async (queryString, page) => {
  const response = await axios.get(`?query=${queryString}&page=${page}`);
  const { results, total, total_pages } = response.data;
  console.log({ results, total, total_pages });
  return { results, total, total_pages };
};