import React from "react";

import SideBar from "../components/SideBar";


const ContentHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8 w-full px-8">
      <h2 className="text-2xl font-bold">Add Student Details</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">
        Login
      </button>
    </div>
  );
};

const FormContainer = () => {
  return (
    <div className="bg-white w-3/4 mx-auto p-8 rounded-lg shadow-lg">
      <div className="flex flex-col items-center mb-6">
        {/* <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
          <img src="#" alt="Upload" className="object-cover rounded-full" />
        </div>
        <h2 className="text-lg font-semibold">Upload Student</h2> */}
        {/* <input type="file" className="mt-2 text-sm" /> */}
      </div>
      <FormGroup label="Student Name" id="student-name" type="text" />
      <FormGroup label="Parent Email" id="student-email" type="email" />
      <FormGroup label="Parent Password" id="student-password" type="password" />
      <FormGroup label="Student RegNo" id="student-reg" type="number" />

      <FormGroup
        label="Department"
        id="student-dept"
        type="select"
        options={[
          { value: "cse", label: "CSE" },
          { value: "csc", label: "CSC" },
          { value: "ece", label: "ECE" },
          { value: "aids", label: "AIDS" },
        ]}
      />
      <FormGroup
        label="Section"
        id="student-sec"
        type="select"
        options={[
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" },
        ]}
      />

      <FormGroup label="Father Name" id="father-name" type="text" />
      <FormGroup label="Mother Name" id="mother-name" type="text" />
      <FormGroup label="Student Number" id="student-number" type="number" />
      <FormGroup label="Parent Number" id="parent-number" type="number" />
      <FormGroup label="Address 1" id="address1" type="text" />
      <FormGroup label="Address 2" id="address2" type="text" />
    </div>
  );
};

const FormGroup = ({ label, id, type, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 font-semibold">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          className="w-full border-gray-300 border rounded-md p-2"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          className="w-full border-gray-300 border rounded-md p-2"
        />
      )}
    </div>
  );
};

const StudentAdmin = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow bg-gray-100 p-6">
        <ContentHeader />
        <FormContainer />
      </div>
    </div>
  );
};

export default StudentAdmin;
