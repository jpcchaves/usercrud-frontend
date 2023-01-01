import { Link } from "react-router-dom";
import OverlaySpinner from "../../../../components/OverlaySpinner";
import Spinner from "../../../../components/Spinner";

import { User } from "../../../../types/User";

import UsersNotFound from "../../components/usersNotFound";

interface HomeViewPros {
  users: User[];
  deleteUser: (id: number, name: string) => void;
  loading: boolean;
  loadDeleteUser: boolean;
}

const HomeView = ({
  users,
  deleteUser,
  loading,
  loadDeleteUser,
}: HomeViewPros) => {
  return (
    <div className="container">
      <div className="py-4">
        {loadDeleteUser && <OverlaySpinner />}
        {loading && (
          <div
            className="text-center d-flex align-items-center justify-content-center"
            style={{ height: "60vh" }}
          >
            <Spinner />
          </div>
        )}
        <table className="table border shadow text-center">
          {!loading && users.length > 0 ? (
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Usuário</th>
                <th scope="col">Email</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
          ) : null}
          <tbody>
            {!loading &&
              users?.map(({ id, name, username, email }, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewuser/${id}`}
                    >
                      Ver
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edituser/${id}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(+id!, name)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!users.length && !loading ? (
          <UsersNotFound message="Nenhum usuário cadastrado! " />
        ) : null}
      </div>
    </div>
  );
};

export default HomeView;
