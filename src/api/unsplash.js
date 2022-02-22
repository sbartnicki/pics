import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Ee2OIFXzEQmM09Dz5T0k0xDPQV71XKl7SACrTzbl_48',
  },
});
