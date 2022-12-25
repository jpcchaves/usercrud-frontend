import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import AddUserView from "./view";

const AddUser = () => {
  const navigate = useNavigate();

  const [error, setError] = useState([]);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await useApi.post("/user", user);

      navigate("/");
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        setError(Object.values(data));
      }
      console.log(error.message);
    }
  };

  return (
    <AddUserView
      onSubmit={onSubmit}
      name={name}
      username={username}
      email={email}
      onInputChange={onInputChange}
      error={error}
    />
  );
};

export default AddUser;
