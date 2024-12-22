// import React, { useState, useEffect } from "react";
// import TeacherForm from "../components/TeacherForm";
// import TeacherTable from "../components/TeacherTable";
// import {
//   getTeachers,
//   addTeacher,
//   updateTeacher,
//   deleteTeacher,
// } from "../services/teacherService";

// function TeacherManagement() {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     fetchTeachers();
//   }, []);

//   const fetchTeachers = async () => {
//     try {
//       const response = await getTeachers();
//       setTeachers(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAdd = async (teacherData) => {
//     try {
//       await addTeacher(teacherData);
//       fetchTeachers();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdate = async (teacherData) => {
//     try {
//       await updateTeacher(teacherData);
//       fetchTeachers();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (teacherId) => {
//     try {
//       await deleteTeacher(teacherId);
//       fetchTeachers();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <TeacherForm onSubmit={handleAdd} />
//       <TeacherTable
//         teachers={teachers}
//         onUpdate={handleUpdate}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default TeacherManagement;

import React, { useState, useEffect } from "react";
import TeacherForm from "../components/TeacherForm";
import TeacherTable from "../components/TeacherTable";
import {
  getAllTeachers,
  createTeacher,
  updateTeacherById,
  deleteTeacherById,
  searchTeachers,
} from "../services/teacherService";

function TeacherManagement() {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [gender, setGender] = useState(""); // Default: All genders

  useEffect(() => {
    // Fetch data initially
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await searchTeachers("", page, limit, ""); // Default search query and filters
      if (response && response.data) {
        setTeachers(response.data);
      } else {
        setTeachers([]); // Set to empty array if no data is returned
      }
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
      setTeachers([]); // Handle error by setting to empty array
    }
  };

  const handleAdd = async (teacherData) => {
    try {
      await createTeacher(teacherData);
      fetchTeachers();
    } catch (error) {
      console.error("Failed to add teacher:", error);
    }
  };

  const handleUpdate = async (teacherData) => {
    try {
      await updateTeacherById(teacherData._id, teacherData);
      fetchTeachers();
    } catch (error) {
      console.error("Failed to update teacher:", error);
    }
  };

  const handleDelete = async (teacherId) => {
    try {
      await deleteTeacherById(teacherId);
      fetchTeachers();
    } catch (error) {
      console.error("Failed to delete teacher:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const searchResults = await searchTeachers(name, page, limit, gender);
      if (searchResults && searchResults.data) {
        setTeachers(searchResults.data);
      } else {
        setTeachers([]);
      }
    } catch (error) {
      console.error("Failed to search teachers:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <TeacherForm onSubmit={handleAdd} />
      <div className="search-bar p-1 m-1">
        <input
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 p-1 m-1"
        >
          Search
        </button>
      </div>
      {teachers && teachers.length > 0 ? (
        <TeacherTable
          teachers={teachers}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ) : (
        <p>No teachers found</p>
      )}
    </div>
  );
}

export default TeacherManagement;
