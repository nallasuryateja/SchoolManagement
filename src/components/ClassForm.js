// import React, { useState } from "react";

// function ClassForm({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     className: "",
//     year: "",
//     teacher: "",
//     studentList: "",
//     fees: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setFormData({
//       className: "",
//       year: "",
//       teacher: "",
//       studentList: "",
//       fees: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <input
//         type="text"
//         name="className"
//         value={formData.className}
//         onChange={handleChange}
//         placeholder="Class Name"
//         className="p-2 border border-gray-300 rounded mb-2"
//       />
//       <input
//         type="text"
//         name="year"
//         value={formData.year}
//         onChange={handleChange}
//         placeholder="Year"
//         className="p-2 border border-gray-300 rounded mb-2"
//       />
//       <input
//         type="text"
//         name="teacher"
//         value={formData.teacher}
//         onChange={handleChange}
//         placeholder="Teacher"
//         className="p-2 border border-gray-300 rounded mb-2"
//       />
//       <input
//         type="text"
//         name="studentList"
//         value={formData.studentList}
//         onChange={handleChange}
//         placeholder="Student List"
//         className="p-2 border border-gray-300 rounded mb-2"
//       />
//       <input
//         type="number"
//         name="fees"
//         value={formData.fees}
//         onChange={handleChange}
//         placeholder="Fees"
//         className="p-2 border border-gray-300 rounded mb-2"
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         Add Class
//       </button>
//     </form>
//   );
// }

// export default ClassForm;

// import React, { useState } from "react";

// function ClassForm({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     className: "",
//     year: "",
//     teacher: "",
//     studentList: "",
//     fees: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { className, year, teacher, studentList, fees } = formData;

//     // Debug log
//     console.log("Form Data on Submit:", formData);

//     // Validation
//     if (!className) {
//       alert("Class Name cannot be empty");
//       return;
//     }

//     if (!year) {
//       alert("Year cannot be empty");
//       return;
//     }

//     if (!teacher) {
//       alert("Teacher cannot be empty");
//       return;
//     }

//     if (!studentList) {
//       alert("Student List cannot be empty");
//       return;
//     }

//     if (!fees || isNaN(fees) || fees <= 0) {
//       alert("Fees must be a positive number");
//       return;
//     }

//     onSubmit(formData);

//     setFormData({
//       className: "",
//       year: "",
//       teacher: "",
//       studentList: "",
//       fees: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <input
//         type="text"
//         name="className"
//         value={formData.className}
//         onChange={handleChange}
//         placeholder="Class Name"
//         className="p-2 border border-gray-300 rounded mb-2 m-2"
//       />
//       <input
//         type="text"
//         name="year"
//         value={formData.year}
//         onChange={handleChange}
//         placeholder="Year"
//         className="p-2 border border-gray-300 rounded mb-2 m-2"
//       />
//       <input
//         type="text"
//         name="teacher"
//         value={formData.teacher}
//         onChange={handleChange}
//         placeholder="Teacher"
//         className="p-2 border border-gray-300 rounded mb-2 m-2"
//       />
//       <input
//         type="text"
//         name="studentList"
//         value={formData.studentList}
//         onChange={handleChange}
//         placeholder="Student List"
//         className="p-2 border border-gray-300 rounded mb-2 m-2"
//       />
//       <input
//         type="number"
//         name="fees"
//         value={formData.fees}
//         onChange={handleChange}
//         placeholder="Fees"
//         className="p-2 border border-gray-300 rounded mb-2 m-2"
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded m-2">
//         Add Class
//       </button>
//     </form>
//   );
// }

// export default ClassForm;

import React, { useState } from "react";

function ClassForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    className: "",
    year: "",
    teacher: "",
    fees: "",
    studentList: [], // Initially empty array for student IDs
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsedData = JSON.parse(event.target.result);
          if (Array.isArray(parsedData)) {
            setFormData((prevState) => ({
              ...prevState,
              studentList: parsedData,
            }));
          } else {
            alert(
              "Invalid file format. Ensure the file contains an array of student IDs."
            );
          }
        } catch (err) {
          alert("Error reading file: " + err.message);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { className, year, teacher, fees, studentList } = formData;

    // Debug log
    console.log("Form Data on Submit:", formData);

    // Validation
    if (!className) {
      alert("Class Name cannot be empty");
      return;
    }

    if (!year) {
      alert("Year cannot be empty");
      return;
    }

    if (!teacher) {
      alert("Teacher cannot be empty");
      return;
    }

    if (studentList.length === 0) {
      alert("Student List cannot be empty");
      return;
    }

    if (!fees || isNaN(fees) || fees <= 0) {
      alert("Fees must be a positive number");
      return;
    }

    // API submission
    onSubmit({
      name: className,
      year: parseInt(year),
      teacher,
      studentFees: parseFloat(fees),
      studentList,
    });

    // Reset form
    setFormData({
      className: "",
      year: "",
      teacher: "",
      fees: "",
      studentList: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="className"
        value={formData.className}
        onChange={handleChange}
        placeholder="Class Name"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="text"
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="text"
        name="teacher"
        value={formData.teacher}
        onChange={handleChange}
        placeholder="Teacher"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="number"
        name="fees"
        value={formData.fees}
        onChange={handleChange}
        placeholder="Fees"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded m-2">
        Add Class
      </button>
    </form>
  );
}

export default ClassForm;
