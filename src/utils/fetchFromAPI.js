import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  url: BASE_URL,
  params: {maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'd5b3820a84msh95cbd6778a33402p1c164ejsnad9f5d768e21',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url,amount) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


