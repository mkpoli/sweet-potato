import aspida from '@aspida/fetch';
import api from './api/$api';

export const client = api(aspida(fetch, { baseURL: process.env.API_URL }));
