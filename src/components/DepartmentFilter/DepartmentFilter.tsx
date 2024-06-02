"use client";
import React from "react";

const Departmentfilter = () => {
  const departments: string[] = [
    "Engineering",
    "Marketing",
    "Human Resources",
    "Finance",
    "Sales",
  ];
  return (
    <div className="flex flex-wrap">
      {departments.map((department: string, index: number) => (
        <div className="flex items-center mr-4 mb-2" key={index}>
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
          />
          <label htmlFor={`checkbox-${index}`} className="ml-2 text-sm">
            {department}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Departmentfilter;
