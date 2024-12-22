import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const getAllStudents = async () => {
  const response = await axios.get(`${API_BASE_URL}/students`);
  return response.data;
};

export const getStudentById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/students/${id}`);
  return response.data;
};

export const createStudent = async (studentData) => {
  const response = await axios.post(`${API_BASE_URL}/students`, studentData);
  return response.data;
};

export const updateStudentById = async (id, studentData) => {
  const response = await axios.put(
    `${API_BASE_URL}/students/${id}`,
    studentData
  );
  return response.data;
};

export const deleteStudentById = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/students/${id}`);
  return response.data;
};

export const searchStudents = async (query, page, limit, filters) => {
  const response = await axios.get(`${API_BASE_URL}/students/search`, {
    params: { query, page, limit, ...filters },
  });
  return response.data;
};
