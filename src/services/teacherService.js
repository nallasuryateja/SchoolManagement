import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const getAllTeachers = async () => {
  const response = await axios.get(`${API_BASE_URL}/teachers`);
  return response.data;
};

export const searchTeachers = async (name, page, limit, gender) => {
  console.log("Fetching teachers with:", { name, page, limit, gender });

  const response = await axios.get(`${API_BASE_URL}/teachers/search`, {
    params: { name, page, limit, gender },
  });
  console.log("Fetched Teachers data", response.data);
  return response.data;
};

export const createTeacher = async (teacherData) => {
  const response = await axios.post(`${API_BASE_URL}/teachers`, teacherData);
  return response.data;
};

export const updateTeacherById = async (id, teacherData) => {
  const response = await axios.put(
    `${API_BASE_URL}/teachers/${id}`,
    teacherData
  );
  return response.data;
};

export const deleteTeacherById = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/teachers/${id}`);
  return response.data;
};
