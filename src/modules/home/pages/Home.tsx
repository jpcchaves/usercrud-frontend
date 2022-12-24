import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";

interface User {
  name: string;
  username: string;
  email: string;
}

const Home = () => {
  const [users, setUser] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const res = await useApi.get("/users");

      const fetchedData: User[] = res.data;

      setUser(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Usuário</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(({ name, username, email }, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                  <button className="btn btn-primary mx-2">Ver</button>
                  <button className="btn btn-outline-primary mx-2">
                    Editar
                  </button>
                  <button className="btn btn-danger mx-2">Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
