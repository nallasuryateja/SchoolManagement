// import React from "react";

// function TeacherTable({ teachers, onUpdate, onDelete }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="border-b">
//             <th className="p-2">Name</th>
//             <th className="p-2">Gender</th>
//             <th className="p-2">Date of Birth</th>
//             <th className="p-2">Contact</th>
//             <th className="p-2">Salary</th>
//             <th className="p-2">Assigned Class</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         {/* <tbody>
//           {teachers.map((teacher) => (
//             <tr key={teacher._id} className="border-b">
//               <td className="p-2">{teacher.name}</td>
//               <td className="p-2">{teacher.gender}</td>
//               <td className="p-2">{teacher.dob}</td>
//               <td className="p-2">{teacher.contact}</td>
//               <td className="p-2">{teacher.salary}</td>
//               <td className="p-2">{teacher.assignedClass}</td>
//               <td className="p-2">
//                 <button
//                   onClick={() => onUpdate(teacher)}
//                   className="bg-yellow-500 text-white p-1 mr-2 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(teacher.id)}
//                   className="bg-red-500 text-white p-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody> */}
//         <tbody className="text-center">
//           {teachers.map((teacher) => (
//             <tr key={teacher._id} className="border-b">
//               <td className="p-2">{teacher.name}</td>
//               <td className="p-2">{teacher.gender}</td>
//               <td className="p-2">{teacher.dob}</td>
//               <td className="p-2">{teacher.contact}</td>
//               <td className="p-2">{teacher.salary}</td>
//               {/* Check if assignedClass is an object */}
//               <td className="p-2">
//                 {typeof teacher.assignedClass === "object"
//                   ? teacher.assignedClass.name || "N/A" // Example: Render a property or fallback
//                   : teacher.assignedClass}
//               </td>
//               <td className="p-2">
//                 <button
//                   onClick={() => onUpdate(teacher)}
//                   className="bg-yellow-500 text-white p-1 mr-2 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(teacher._id)}
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

// export default TeacherTable;

// import React from "react";

// function TeacherTable({ teachers = [], onUpdate, onDelete }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="border-b">
//             <th className="p-2">Name</th>
//             <th className="p-2">Gender</th>
//             <th className="p-2">Date of Birth</th>
//             <th className="p-2">Contact</th>
//             <th className="p-2">Salary</th>
//             <th className="p-2">Assigned Class</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           {teachers.map((teacher) => {
//             if (!teacher) return null;
//             return (
//               <tr key={teacher._id || Math.random()} className="border-b">
//                 <td className="p-2">{teacher.name || "N/A"}</td>
//                 <td className="p-2">{teacher.gender || "N/A"}</td>
//                 <td className="p-2">{teacher.dob || "N/A"}</td>
//                 <td className="p-2">{teacher.contact || "N/A"}</td>
//                 <td className="p-2">{teacher.salary || "N/A"}</td>
//                 <td className="p-2">
//                   {teacher.assignedClass &&
//                   typeof teacher.assignedClass === "object"
//                     ? teacher.assignedClass.name || "N/A"
//                     : teacher.assignedClass || "N/A"}
//                 </td>
//                 <td className="p-2">
//                   <button
//                     onClick={() => onUpdate(teacher)}
//                     className="bg-yellow-500 text-white p-1 mr-2 rounded"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => onDelete(teacher._id)}
//                     className="bg-red-500 text-white p-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TeacherTable;

//working code below
import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function TeacherTable({ teachers = [], onUpdate, onDelete }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);

  const handleUpdateClick = (teacher) => {
    setCurrentTeacher(teacher);
    setPopupOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUpdate(currentTeacher); // Pass the updated teacher details
    setPopupOpen(false);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setCurrentTeacher(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Date of Birth</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Salary</th>
            <th className="p-2">Assigned Class</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {teachers.map((teacher) => {
            if (!teacher) return null;
            return (
              <tr key={teacher._id || Math.random()} className="border-b">
                <td className="p-2">{teacher.name || "N/A"}</td>
                <td className="p-2">{teacher.gender || "N/A"}</td>
                {/* <td className="p-2">{teacher.dob || "N/A"}</td> */}
                <td className="p-2">
                  {teacher.dob
                    ? new Date(teacher.dob).toLocaleDateString("en-GB")
                    : "N/A"}
                </td>
                <td className="p-2">{teacher.contact || "N/A"}</td>
                <td className="p-2">{teacher.salary || "N/A"}</td>
                <td className="p-2">
                  {teacher.assignedClass &&
                  typeof teacher.assignedClass === "object"
                    ? teacher.assignedClass.name || "N/A"
                    : teacher.assignedClass || "N/A"}
                </td>
                {/* <td className="p-2">
                  <button
                    onClick={() => handleUpdateClick(teacher)}
                    className="bg-yellow-500 text-white p-1 mr-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(teacher._id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </td> */}
                <td className="p-2">
                  <button
                    onClick={() => handleUpdateClick(teacher)}
                    className="text-yellow-500 p-1 mr-2"
                    title="Edit"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(teacher._id)}
                    className="text-red-500 p-1"
                    title="Delete"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3 className="text-xl mb-4">Update Teacher Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block">Name:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={currentTeacher.name}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentTeacher({
                      ...currentTeacher,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Gender:</label>
                <select
                  name="gender"
                  defaultValue={currentTeacher.gender}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentTeacher({
                      ...currentTeacher,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  defaultValue={currentTeacher.dob}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentTeacher({
                      ...currentTeacher,
                      dob: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Contact:</label>
                <input
                  type="text"
                  name="contact"
                  defaultValue={currentTeacher.contact}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentTeacher({
                      ...currentTeacher,
                      contact: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Salary:</label>
                <input
                  type="number"
                  name="salary"
                  defaultValue={currentTeacher.salary}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentTeacher({
                      ...currentTeacher,
                      salary: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Assigned Class:</label>
                <input
                  type="text"
                  name="assignedClass"
                  defaultValue={currentTeacher.assignedClass?.name || ""}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentTeacher({
                      ...currentTeacher,
                      assignedClass: {
                        ...currentTeacher.assignedClass,
                        name: e.target.value,
                      },
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

export default TeacherTable;
