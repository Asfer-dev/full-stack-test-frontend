import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./components/FormPage";
import SubmissionsPage from "./components/SubmissionsPage";
import UpdateSubmissionPage from "./components/UpdateSubmissionPage";

const App = () => {
  return (
    <main className="flex gap-4">
      <Router>
        <nav className="p-4 fixed top-0 left-0 right-0 border-b border-zinc-200 backdrop-blur-xl">
          <ul className="flex gap-4 max-w-lg mx-auto">
            <li>
              <Link className="hover:text-zinc-600 text-black" to="/">
                Form Page
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-zinc-600 text-black"
                to="/submissions"
              >
                Submissions Page
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
    </main>
  );
};

export default App;
