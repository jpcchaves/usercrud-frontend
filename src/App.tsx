import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./layout/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./modules/user/pages/Home";
import AddUser from "./modules/user/pages/addUser";
import EditUser from "./modules/user/pages/editUser";
import ViewUser from "./modules/user/pages/ViewUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
