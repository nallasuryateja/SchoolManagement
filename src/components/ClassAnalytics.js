// // ClassAnalytics.js
// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// // Register the necessary components
// Chart.register(ArcElement, Tooltip, Legend);

// const ClassAnalytics = ({ classId }) => {
//   const [classData, setClassData] = useState(null);
//   const [genderData, setGenderData] = useState({ male: 0, female: 0 });

//   useEffect(() => {
//     const fetchClassData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/classes/67650f557741c7e2d1eb491f`
//           //   `http://localhost:3000/api/classes/${classId}67650f557741c7e2d1eb491f`
//         );
//         const data = await response.json();
//         setClassData(data);
//         if (data && Array.isArray(data.studentList)) {
//           calculateGenderDistribution(data.studentList);
//         }
//       } catch (error) {
//         console.error("Error fetching class data:", error);
//       }
//     };
//     fetchClassData();
//   }, [classId]);

//   const calculateGenderDistribution = (students) => {
//     let maleCount = 0;
//     let femaleCount = 0;
//     students.forEach((student) => {
//       if (student.gender === "Male") maleCount++;
//       else if (student.gender === "Female") femaleCount++;
//     });
//     setGenderData({ male: maleCount, female: femaleCount });
//   };

//   const pieData = {
//     labels: ["Male", "Female"],
//     datasets: [
//       {
//         data: [genderData.male, genderData.female],
//         backgroundColor: ["#36A2EB", "#FF6384"],
//       },
//     ],
//   };

//   return (
//     <div>
//       {classData ? (
//         <>
//           <h1>{classData.name}</h1>
//           <p>Year: {classData.year}</p>
//           <p>Teacher: {classData.teacher ? classData.teacher.name : "N/A"}</p>
//           {/* <h2>Students:</h2>
//           {Array.isArray(classData.studentList) &&
//           classData.studentList.length > 0 ? (
//             <ul>
//               {classData.studentList.map((student) => (
//                 <li key={student._id}>{student.name}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No students found for this class.</p>
//           )} */}
//           <h2>Gender Distribution</h2>
//           <Pie data={pieData} />
//         </>
//       ) : (
//         <p>Loading class data...</p>
//       )}
//     </div>
//   );
// };

// export default ClassAnalytics;

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/ClassAnalytics.css";

// Register the necessary components
Chart.register(ArcElement, Tooltip, Legend);

const ClassAnalytics = ({ classId }) => {
  const [classData, setClassData] = useState(null);
  const [genderData, setGenderData] = useState({ male: 0, female: 0 });

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/classes/67650f557741c7e2d1eb491f`
        );
        const data = await response.json();
        setClassData(data);
        if (data && Array.isArray(data.studentList)) {
          calculateGenderDistribution(data.studentList);
        }
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };
    fetchClassData();
  }, [classId]);

  const calculateGenderDistribution = (students) => {
    let maleCount = 0;
    let femaleCount = 0;
    students.forEach((student) => {
      if (student.gender === "Male") maleCount++;
      else if (student.gender === "Female") femaleCount++;
    });
    setGenderData({ male: maleCount, female: femaleCount });
  };

  const pieData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [genderData.male, genderData.female],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="container">
      {classData ? (
        <>
          <h1>{classData.name}</h1>
          <p>Year: {classData.year}</p>
          <p>Teacher: {classData.teacher ? classData.teacher.name : "N/A"}</p>
          <h2>Gender Distribution</h2>
          <div className="chart-container">
            <Pie data={pieData} />
          </div>
        </>
      ) : (
        <p className="loading">Loading class data...</p>
      )}
    </div>
  );
};

export default ClassAnalytics;
