import { Link } from "react-router-dom";
import { User } from "../../../../types/User";

interface ViewUserProps {
  user: User;
  loading: boolean;
}

const ViewUserView = ({ user, loading }: ViewUserProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalhes do Usuário</h2>
          <div className="card">
            <div className="card-header">
              <p>
                Usuário:{" "}
                <strong>{loading ? "Buscando dados..." : user.name}</strong>
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nome: </b>
                  {loading ? "Buscando dados..." : user.name}
                </li>
                <li className="list-group-item">
                  <b>Usuário: </b>
                  {loading ? "Buscando dados..." : user.username}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {loading ? "Buscando dados..." : user.email}
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
