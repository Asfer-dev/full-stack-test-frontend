import { useEffect, useState } from "react";
import axios from "axios";

interface Submission {
  name: string;
  email: string;
  dob: string;
  department: string;
  comments: string;
}

const SubmissionsPage = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/submissions") // Replace with your backend URL
      .then((response) => setSubmissions(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h1>Submissions</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Department</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.dob}</td>
              <td>{submission.department}</td>
              <td>{submission.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionsPage;
