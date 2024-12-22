import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeacherManagement from "./pages/TeacherManagement";
import StudentManagement from "./pages/StudentManagement";
import ClassManagement from "./pages/ClassManagement";
import AnalyticsPage from "./components/AnalyticsPage";
import Header from "./components/Header";

import "tailwindcss/tailwind.css";
import "./styles/tailwind.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* <nav className="bg-blue-500 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Teachers
              </a>
            </li>
            <li>
              <a href="/students" className="hover:underline">
                Students
              </a>
            </li>
            <li>
              <a href="/classes" className="hover:underline">
                Classes
              </a>
            </li>
            <li>
              <a href="/analytics" className="hover:underline">
                Analytics
              </a>
            </li>
          </ul>
        </nav> */}
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<TeacherManagement />} />
            <Route path="/students" element={<StudentManagement />} />
            <Route path="/classes" element={<ClassManagement />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
