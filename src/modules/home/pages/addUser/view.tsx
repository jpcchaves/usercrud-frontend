import { Link } from "react-router-dom";
import { User } from "../../../../types/User";

interface AddUserProps extends User {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: any;
}

const AddUserView = ({
  onSubmit,
  name,
  username,
  email,
  onInputChange,
  error,
}: AddUserProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Cadastrar Usuário</h2>
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
            {error &&
              error.map((err: string, idx: number) => (
                <div key={idx} className="d-flex align-items-center">
                  <p className="text-danger">{err}</p>
                </div>
              ))}
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-outline-primary">
                Criar
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

export default AddUserView;
