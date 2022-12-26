import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./layout/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./modules/home/pages/Home";
import AddUser from "./modules/home/pages/addUser";
import EditUser from "./modules/home/pages/editUser";
import ViewUser from "./modules/home/pages/ViewUser";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
