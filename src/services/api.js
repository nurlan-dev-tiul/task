import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://tz-task.herokuapp.com/api',
});
// https://app-blog-mern.herokuapp.com/api
// http://localhost:5000/api

