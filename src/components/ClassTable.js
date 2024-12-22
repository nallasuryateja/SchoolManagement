// import React from "react";

// function ClassTable({ classes, onUpdate, onDelete }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="border-b">
//             <th className="p-2">Class Name</th>
//             <th className="p-2">Year</th>
//             <th className="p-2">Teacher</th>
//             <th className="p-2">Student List</th>
//             <th className="p-2">Fees</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {classes.map((classItem) => (
//             <tr key={classItem.id} className="border-b">
//               <td className="p-2">{classItem.className}</td>
//               <td className="p-2">{classItem.year}</td>
//               <td className="p-2">{classItem.teacher}</td>
//               <td className="p-2">{classItem.studentList.join(", ")}</td>
//               <td className="p-2">{classItem.fees}</td>
//               <td className="p-2">
//                 <button
//                   onClick={() => onUpdate(classItem)}
//                   className="bg-yellow-500 text-white p-1 mr-2 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(classItem.id)}
//                   className="bg-red-500 text-white p-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ClassTable;

// import React from "react";
// import "../styles/ClassTable.css";

// function ClassTable({ classes, onUpdate, onDelete }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="border-b bg-gray-100">
//             <th className="p-2">Class Name</th>
//             <th className="p-2">Year</th>
//             <th className="p-2">Teacher</th>
//             <th className="p-2">Student Strength</th>
//             <th className="p-2">Fees</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           {classes.map((cls) => (
//             <tr key={cls._id} className="border-b hover:bg-gray-50">
//               <td className="p-2">{cls.name}</td>
//               <td className="p-2">{cls.year}</td>
//               <td className="p-2">{cls.teacher.name}</td>
//               <td className="p-2">{cls.studentList.length}</td>
//               <td className="p-2">{cls.studentFees}</td>
//               <td className="p-2">
//                 <button
//                   onClick={() => onUpdate(cls)}
//                   className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded hover:bg-yellow-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(cls._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ClassTable;

import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "../styles/ClassTable.css";

function ClassTable({ classes, onUpdate, onDelete }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState(null);

  const handleUpdateClick = (cls) => {
    setCurrentClass(cls);
    setPopupOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedClass = {
      ...currentClass,
      [event.target.name]: event.target.value,
    };
    onUpdate(updatedClass);
    setPopupOpen(false);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setCurrentClass(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-2">Class Name</th>
            <th className="p-2">Year</th>
            <th className="p-2">Teacher</th>
            <th className="p-2">Student Strength</th>
            <th className="p-2">Fees</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {classes.map((cls) => (
            <tr key={cls._id} className="border-b hover:bg-gray-50">
              <td className="p-2">{cls.name}</td>
              <td className="p-2">{cls.year}</td>
              <td className="p-2">{cls.teacher ? cls.teacher.name : "N/A"}</td>
              <td className="p-2">{cls.studentList.length}</td>
              <td className="p-2">{cls.studentFees}</td>
              {/* <td className="p-2">
                <button
                  onClick={() => handleUpdateClick(cls)}
                  className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(cls._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td> */}
              <td className="p-2">
                <button
                  onClick={() => handleUpdateClick(cls)}
                  className="text-yellow-500 p-1 mr-2"
                  title="Edit"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => onDelete(cls._id)}
                  className="text-red-500 p-1"
                  title="Delete"
                >
                  <FaTrashAlt size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3 className="text-xl mb-4">Update Class Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block">Class Name:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={currentClass.name}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentClass({ ...currentClass, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Year:</label>
                <input
                  type="text"
                  name="year"
                  defaultValue={currentClass.year}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentClass({ ...currentClass, year: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Teacher Name:</label>
                <input
                  type="text"
                  name="teacherName"
                  defaultValue={
                    currentClass.teacher ? currentClass.teacher.name : "N/A"
                  }
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentClass({
                      ...currentClass,
                      teacher: {
                        ...currentClass.teacher,
                        name: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Student Fees:</label>
                <input
                  type="number"
                  name="studentFees"
                  defaultValue={currentClass.studentFees}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentClass({
                      ...currentClass,
                      studentFees: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closePopup}
                  className="bg-gray-500 text-white px-3 py-1 rounded mr-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassTable;
