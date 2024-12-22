// import React, { useState, useEffect } from "react";
// import ClassForm from "../components/ClassForm";
// import ClassTable from "../components/ClassTable";
// import {
//   getClasses,
//   addClass,
//   updateClass,
//   deleteClass,
// } from "../services/api";

// function ClassManagement() {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   const fetchClasses = async () => {
//     try {
//       const response = await getClasses();
//       setClasses(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAdd = async (classData) => {
//     try {
//       await addClass(classData);
//       fetchClasses();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleUpdate = async (classData) => {
//     try {
//       await updateClass(classData);
//       fetchClasses();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (classId) => {
//     try {
//       await deleteClass(classId);
//       fetchClasses();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <ClassForm onSubmit={handleAdd} />
//       <ClassTable
//         classes={classes}
//         onUpdate={handleUpdate}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default ClassManagement;

import React, { useState, useEffect } from "react";
import ClassForm from "../components/ClassForm";
import ClassTable from "../components/ClassTable";
import {
  getAllClasses,
  createClass,
  updateClass,
  deleteClass,
} from "../services/classService";

function ClassManagement() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const data = await getAllClasses();
      setClasses(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const handleAdd = async (classData) => {
    try {
      await createClass(classData);
      fetchClasses();
    } catch (error) {
      console.error("Error adding class:", error);
    }
  };

  const handleUpdate = async (classData) => {
    try {
      await updateClass(classData._id, classData);
      fetchClasses();
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  const handleDelete = async (classId) => {
    try {
      await deleteClass(classId);
      fetchClasses();
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ClassForm onSubmit={handleAdd} />
      <ClassTable
        classes={classes}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default ClassManagement;
