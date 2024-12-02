import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

// Initialize Socket.IO client
const socket = io("http://localhost:5000"); // Replace with your backend URL
interface Submission {
  _id: string;
  name: string;
  email: string;
  dob: string;
  department: string;
  comments: string;
}

const SubmissionsPage = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    // Fetch initial submissions
    axios
      .get("http://localhost:5000/api/submission") // Replace with your backend URL
      .then((response) => setSubmissions(response.data))
      .catch((error) => console.error(error));

    // Listen for new submissions via Socket.IO
    socket.on("new_submission", (submission: Submission) => {
      setSubmissions((prev) => [submission, ...prev]);
      toast.success(`New submission added: ${submission.name}`);
    });

    // Cleanup socket listener
    return () => {
      socket.off("new_submission");
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/submission") // Replace with your backend URL
      .then((response) => setSubmissions(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (subId: string) => {
    try {
      const confirm = window.confirm("Do you want to delete this submission?");
      if (confirm) {
        const response = await axios.delete(
          `http://localhost:5000/api/submission/${subId}`
        );
        console.log(response);
        toast.success("Successfully deleted submission.");
        setSubmissions((prev) => {
          const submissions = prev.filter((sub) => sub._id !== subId);
          return submissions;
        });
      }
    } catch (error) {
      toast.error(
        "There was an error in deleting submission. Try again later."
      );
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8">Submissions</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Department</TableHead>
            <TableHead className="">Comments</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission._id} className="text-xs md:text-sm">
              <TableCell className="font-medium">{submission.name}</TableCell>
              <TableCell>{submission.email}</TableCell>
              <TableCell>
                {new Date(submission.dob).toLocaleDateString("en-GB")}
              </TableCell>
              <TableCell>{submission.department}</TableCell>
              <TableCell className="">{submission.comments}</TableCell>
              <TableCell className="flex flex-col gap-4">
                <Button variant={"outline"}>
                  <Link to={"/update-submission/" + submission._id}>
                    Update
                  </Link>
                </Button>
                <Button
                  onClick={() => handleDelete(submission._id)}
                  variant={"destructive"}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubmissionsPage;
