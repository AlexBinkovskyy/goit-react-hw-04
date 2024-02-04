import axios from 'axios';

const ACCESS_KEY = 'Client-ID HGbT0DpGTed59sCna-QTm2ht1TZGiEGD-Z7j2y5epBc';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

axios.defaults.headers.common['Authorization'] = ACCESS_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const fetchQuery = (query, page) => {
  const response = axios(`search?qery=${query}&page=${page}`);
    console.log(response);
};
