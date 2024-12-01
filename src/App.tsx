import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./components/FormPage";
import SubmissionsPage from "./components/SubmissionsPage";
import UpdateSubmissionPage from "./components/UpdateSubmissionPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main className="flex gap-4">
      <Router>
        <nav className="p-4 fixed top-0 left-0 right-0 border-b border-zinc-200 bg-white/65 z-[500] backdrop-blur-lg">
          <ul className="flex gap-4 max-w-lg mx-auto">
            <li>
              <Link
                className="hover:text-zinc-600 hover:font-medium transition-all duration-150 block text-black"
                to="/"
              >
                Add a Submission
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-zinc-600 hover:font-medium transition-all duration-150 block text-black"
                to="/submissions"
              >
                Submissions
              </Link>
            </li>
          </ul>
        </nav>
        <section className="p-4 flex-1 pt-20">
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/submissions" element={<SubmissionsPage />} />
            <Route
              path="/update-submission/:id"
              element={<UpdateSubmissionPage />}
            />
          </Routes>
        </section>
      </Router>
      <Toaster />
    </main>
  );
};

export default App;
