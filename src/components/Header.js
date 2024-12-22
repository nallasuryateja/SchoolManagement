// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="p-4 bg-blue-500 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl">School CRM</h1>
//         <nav>
//           <Link to="/" className="mr-4">
//             Home
//           </Link>
//           <Link to="/class-management" className="mr-4">
//             Class Management
//           </Link>
//           <Link to="/teacher-management" className="mr-4">
//             Teacher Management
//           </Link>
//           <Link to="/student-management" className="mr-4">
//             Student Management
//           </Link>
//           <Link to="/analytics">Analytics</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { FaSchool, FaUniversity } from "react-icons/fa"; // Use a different icon, e.g., FaUniversity
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold">School CRM</h1> */}
        <FaUniversity className="icon" title="School Icon" />
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Teacher Management
          </Link>
          <Link to="/classes" className="hover:text-gray-200">
            Class Management
          </Link>

          <Link to="/students" className="hover:text-gray-200">
            Student Management
          </Link>
          <Link to="/analytics" className="hover:text-gray-200">
            Analytics
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
