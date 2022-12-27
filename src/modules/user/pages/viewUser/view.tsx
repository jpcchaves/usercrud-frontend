import { Link } from "react-router-dom";
import { User } from "../../../../types/User";

const ViewUserView = ({ user }: { user: User }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalhes do Usuário</h2>
          <div className="card">
            <div className="card-header">
              <p>
                Usuário: <strong>{user.name || ""}</strong>
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nome: </b>
                  {user.name || ""}
                </li>
                <li className="list-group-item">
                  <b>Usuário: </b>
                  {user.username || ""}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.email || ""}
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <Link to="/" className="btn btn-primary mt-4">
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserView;
