import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Usercrud App
          </Link>

          <Link to="/adduser" className="btn btn-outline-light">
            Add Usuário
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
