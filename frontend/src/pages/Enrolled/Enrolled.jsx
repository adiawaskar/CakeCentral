import React, { useState, useEffect } from 'react';
import './Enrolled.css';
import { jsPDF } from "jspdf";
import "jspdf-autotable";


const Enrolled = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the enrolled students from localStorage
    const enrolledStudents = JSON.parse(localStorage.getItem("enrolledStudents")) || [];
    setStudents(enrolledStudents);
  }, []);

  // Function to download the data as JSON
  const downloadJSON = () => {
    const data = students;
    const fileName = "enrolled_students.json";
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Function to download the table as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#enrolled-table" }); // Automatically generate the table in PDF
    doc.save("enrolled_students.pdf"); // Save the generated PDF
  };

  return (
    <div className="enrolled-page">
      <h1>Enrolled Students</h1>
      {/* Displaying the table even if there are no students */}
      <table className="enrolled-table" id="enrolled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {/* If no students, an empty table will be displayed */}
          {students.length === 0 ? (
            <tr>
              <td colSpan="4">No students enrolled yet.</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.contactNo}</td>
                <td>{student.course}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Buttons for downloading data */}
      <div className="download-buttons">
        <button onClick={downloadJSON} className="download-button">Download JSON</button>
        <button onClick={downloadPDF} className="download-button">Download PDF</button>
      </div>
    </div>
  );
};

export default Enrolled;
