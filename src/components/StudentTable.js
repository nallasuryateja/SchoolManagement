// import React from "react";

// function StudentTable({ students, onUpdate, onDelete }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="border-b">
//             <th className="p-2">Name</th>
//             <th className="p-2">Gender</th>
//             <th className="p-2">Date of Birth</th>
//             <th className="p-2">Contact</th>
//             <th className="p-2">Fees Paid</th>
//             <th className="p-2">Assigned Class</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           {students.map((student) => (
//             <tr key={student._id} className="border-b">
//               <td className="p-2">{student.name}</td>
//               <td className="p-2">{student.gender}</td>
//               <td className="p-2">{student.dob}</td>
//               <td className="p-2">{student.contact}</td>
//               <td className="p-2">{student.feesPaid ? "Yes" : "No"}</td>
//               <td className="p-2">{student.class.name}</td>
//               {/* <td className="p-2">
//                 {student.assignedClass &&
//                 typeof student.assignedClass === "object"
//                   ? student.assignedClass.name || "N/A"
//                   : student.assignedClass || "N/A"}
//               </td> */}
//               <td className="p-2">
//                 <button
//                   onClick={() => onUpdate(student)}
//                   className="bg-yellow-500 text-white p-1 mr-2 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(student._id)}
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

// export default StudentTable;

import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function StudentTable({ students, onUpdate, onDelete }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleUpdateClick = (student) => {
    setCurrentStudent(student);
    setPopupOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUpdate(currentStudent); // Pass the updated student details
    setPopupOpen(false);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setCurrentStudent(null);
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
            <th className="p-2">Fees Paid</th>
            <th className="p-2">Assigned Class</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.map((student) => (
            <tr key={student._id} className="border-b">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.gender}</td>
              {/* <td className="p-2">{student.dob}</td> */}
              <td className="p-2">
                {student.dob
                  ? new Date(student.dob).toLocaleDateString("en-GB")
                  : "N/A"}
              </td>
              <td className="p-2">{student.contact}</td>
              <td className="p-2">{student.feesPaid ? "Yes" : "No"}</td>
              <td className="p-2">{student.class?.name || "N/A"}</td>
              {/* <td className="p-2">
                <button
                  onClick={() => handleUpdateClick(student)}
                  className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td> */}
              <td className="p-2">
                <button
                  onClick={() => handleUpdateClick(student)}
                  className="text-yellow-500 p-1 mr-2"
                  title="Edit"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => onDelete(student._id)}
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
            <h3 className="text-xl mb-4">Update Student Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block">Name:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={currentStudent.name}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Gender:</label>
                <select
                  name="gender"
                  defaultValue={currentStudent.gender}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
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
                  defaultValue={currentStudent.dob}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
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
                  defaultValue={currentStudent.contact}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      contact: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block">Fees Paid:</label>
                <select
                  name="feesPaid"
                  defaultValue={currentStudent.feesPaid ? "Yes" : "No"}
                  className="border rounded w-full p-2"
                  onChange={(e) =>
                    setCurrentStudent({
                      ...currentStudent,
                      feesPaid: e.target.value === "Yes",
                    })
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
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

export default StudentTable;
