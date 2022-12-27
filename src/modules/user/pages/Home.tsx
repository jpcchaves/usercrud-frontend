import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { Link } from "react-router-dom";
import { User } from "../../../types/User";
import UsersNotFound from "../components/usersNotFound";

const Home = () => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await useApi.get("/users");

      const fetchedData: User[] = res.data;

      setUser(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await useApi.delete(`/user/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow text-center">
          {users.length > 0 ? (
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Usuário</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
          ) : null}
          <tbody>
            {users?.map(({ id, name, username, email }, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewuser/${id}`}>
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
                    onClick={() => deleteUser(+id!)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!users.length ? (
          <UsersNotFound message="Nenhum usuário cadastrado! " />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
