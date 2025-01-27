import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/tasks';

export const fetchTasks = () => axios.get(API_URL);
export const fetchTask = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(API_URL, { task });
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, { task });
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
