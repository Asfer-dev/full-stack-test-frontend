import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./Components/FormPage";
import SubmissionsPage from "./Components/SubmissionsPage";

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Form Page</Link>
          </li>
          <li>
            <Link to="/submissions">Submissions Page</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
