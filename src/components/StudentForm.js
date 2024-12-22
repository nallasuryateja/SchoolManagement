import React, { useState } from "react";

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    contact: "",
    feesPaid: "",
    assignedClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      gender: "",
      dob: "",
      contact: "",
      feesPaid: "",
      assignedClass: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Student Name"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        placeholder="Gender"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        placeholder="Date of Birth"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Contact Number"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="number"
        name="feesPaid"
        value={formData.feesPaid}
        onChange={handleChange}
        placeholder="Fees Paid"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <input
        type="text"
        name="assignedClass"
        value={formData.assignedClass}
        onChange={handleChange}
        placeholder="Assigned Class"
        className="p-2 border border-gray-300 rounded mb-2 m-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded m-2">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;
