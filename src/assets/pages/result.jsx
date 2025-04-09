import React, { useRef } from "react";

const StudentResultView = () => {
  const resultRef = useRef();

  // Hardcoded student name - In real app, this would come from login/session
  const loggedInStudent = "Ehsan";

  const data = [
    {
      id: 1,
      exam: "BSc 1st Semester 2020",
      class: "BS1st Semester 2020",
      student: "Ehsan",
      subject: "Mathematics",
      marks: "73",
      grade: "B+",
    },
    {
      id: 2,
      exam: "BSc 1st Semester 2020",
      class: "BS1st Semester 2020",
      student: "Ehsan",
      subject: "Physics",
      marks: "78",
      grade: "A",
    },
    {
      id: 3,
      exam: "BSc 1st Semester 2020",
      class: "BS1st Semester 2020",
      student: "Ehsan",
      subject: "Chemistry",
      marks: "69",
      grade: "B",
    },
    {
      id: 4,
      exam: "BSc 1st Semester 2020",
      class: "BS1st Semester 2020",
      student: "Ehsan",
      subject: "English",
      marks: "85",
      grade: "A+",
    },
    {
      id: 5,
      exam: "BSc 1st Semester 2020",
      class: "BS1st Semester 2020",
      student: "Ehsan",
      subject: "Computer Science",
      marks: "90",
      grade: "A+",
    },
    // Add more subjects if needed
  ];

  const studentResults = data.filter(
    (item) => item.student === loggedInStudent
  );

  const handlePrint = () => {
    const printContents = resultRef.current.innerHTML;
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Report Card</title>");
    printWindow.document.write("</head><body>");
    printWindow.document.write(printContents);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 lg:ml-[16.66%] sm:p-6 bg-white shadow-lg rounded-lg">
      <div ref={resultRef}>
        <h2 className="text-2xl font-bold text-center mb-4">My Result</h2>
        <p className="text-md text-center mb-4 font-medium">
          Name: <span className="font-semibold">{loggedInStudent}</span>
        </p>

        <table className="w-full border border-gray-300 text-sm sm:text-base rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 border">S.No</th>
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Marks</th>
              <th className="p-3 border">Grade</th>
              <th className="p-3 border">Exam</th>
            </tr>
          </thead>
          <tbody>
            {studentResults.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-red-500">
                  No results found.
                </td>
              </tr>
            ) : (
              studentResults.map((item, index) => (
                <tr
                  key={item.id}
                  className="even:bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                >
                  <td className="p-3 border text-center">{index + 1}</td>
                  <td className="p-3 border">{item.subject}</td>
                  <td className="p-3 border text-center">{item.marks}</td>
                  <td className="p-3 border text-center">{item.grade}</td>
                  <td className="p-3 border text-center">{item.exam}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white cursor-pointer px-6 py-3 rounded-md text-lg font-semibold shadow-md transition duration-300 transform hover:scale-105"
        >
          Print / Download Report
        </button>
      </div>
    </div>
  );
};

export default StudentResultView;
