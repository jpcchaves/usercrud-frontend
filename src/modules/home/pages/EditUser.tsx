import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      loadUser(+id);
    }
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await useApi.put(`/user/${id}`, user);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async (id: number) => {
    const res = await useApi.get(`/user/${id}`);

    setUser(res.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">
            Editando o Usuário: {user.name || ""}
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                placeholder="Digite seu nome..."
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Usuário
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                placeholder="Digite seu usuário..."
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                placeholder="Digite seu email..."
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-outline-primary">
                Editar
              </button>
              <Link to="/" className="btn btn-outline-danger mx-2">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
