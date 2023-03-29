import axios from 'axios';

export const clientAxios = axios.create({
  baseURL: 'https://gameload-api.onrender.com/api', // Reemplaza esto con la URL de tu API de juegos
  headers: {
    'Content-Type': 'application/json',
  },
});

