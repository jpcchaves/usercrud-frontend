import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await useApi.get(`/user/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">
            Detalhes do Usuário: {user.name || ""}
          </h2>
          <div className="card">
            <div className="card-header">
              Detalhes do usuário:
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
          <Link to="/" className="btn btn-primary mt-4">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
