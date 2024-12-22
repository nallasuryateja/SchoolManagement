// import axios from "axios";

// const API_BASE_URL = "http://localhost:5000";

// export const getAllClasses = async () => {
//   const response = await axios.get(`${API_BASE_URL}/classes`);
//   return response.data;
// };

// export const getClassesWithPagination = async (page, limit, sort) => {
//   const response = await axios.get(`${API_BASE_URL}/classes/paginate`, {
//     params: { page, limit, sort },
//   });
//   return response.data;
// };

// export const getClassById = async (id) => {
//   const response = await axios.get(`${API_BASE_URL}/classes/${id}`);
//   return response.data;
// };

// export const createClass = async (classData) => {
//   const response = await axios.post(`${API_BASE_URL}/classes`, classData);
//   return response.data;
// };

// export const updateClassById = async (id, classData) => {
//   const response = await axios.put(`${API_BASE_URL}/classes/${id}`, classData);
//   return response.data;
// };

// export const deleteClassById = async (id) => {
//   const response = await axios.delete(`${API_BASE_URL}/classes/${id}`);
//   return response.data;
// };

import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const getAllClasses = async () => {
  const response = await axios.get(`${API_BASE_URL}/classes`);
  return response.data;
};

export const createClass = async (classData) => {
  const response = await axios.post(`${API_BASE_URL}/classes`, classData);
  return response.data;
};

export const updateClass = async (id, classData) => {
  const response = await axios.put(`${API_BASE_URL}/classes/${id}`, classData);
  return response.data;
};

export const deleteClass = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/classes/${id}`);
  return response.data;
};
