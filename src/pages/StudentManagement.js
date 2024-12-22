// import React, { useState, useEffect } from "react";
// import StudentForm from "../components/StudentForm";
// import StudentTable from "../components/StudentTable";
// import {
//   getStudents,
//   addStudent,
//   updateStudent,
//   deleteStudent,
// } from "../services/api";

// function StudentManagement() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await getStudents();
//       setStudents(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAdd = async (studentData) => {
//     try {
//       await addStudent(studentData);
//       fetchStudents();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdate = async (studentData) => {
//     try {
//       await updateStudent(studentData);
//       fetchStudents();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (studentId) => {
//     try {
//       await deleteStudent(studentId);
//       fetchStudents();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <StudentForm onSubmit={handleAdd} />
//       <StudentTable
//         students={students}
//         onUpdate={handleUpdate}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default StudentManagement;

import React, { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import {
  getAllStudents,
  createStudent,
  updateStudentById,
  deleteStudentById,
} from "../services/studentService"; // Corrected import paths

function StudentManagement() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getAllStudents(); // Corrected function call
      setStudents(data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const handleAdd = async (studentData) => {
    try {
      await createStudent(studentData); // Corrected function call
      fetchStudents();
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  const handleUpdate = async (studentData) => {
    try {
      await updateStudentById(studentData._id, studentData); // Corrected function call
      fetchStudents();
    } catch (error) {
      console.error("Failed to update student:", error);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      await deleteStudentById(studentId); // Corrected function call
      fetchStudents();
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <StudentForm onSubmit={handleAdd} />
      <StudentTable
        students={students}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default StudentManagement;
