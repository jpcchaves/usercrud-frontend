import { useEffect, useState } from "react";
import { useApi } from "../../../../hooks/useApi";
import { User } from "../../../../types/User";

import HomeView from "./view";

const Home = () => {
  const [users, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadDeleteUser, setLoadDeleteUser] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await useApi.get("/users");

      const fetchedData: User[] = res.data;

      setUser(fetchedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const deleteUser = async (id: number, name: string) => {
    try {
      if (
        window.confirm(
          `Você irá apagar o usuário ${name}, deseja continuar...?`
        ) === true
      ) {
        setLoadDeleteUser(true);
        await useApi.delete(`/user/${id}`);
        getUsers();
      }
      setLoadDeleteUser(false);
    } catch (error) {
      setLoadDeleteUser(false);
      console.log(error);
    }
  };

  return (
    <HomeView
      users={users}
      deleteUser={deleteUser}
      loading={loading}
      loadDeleteUser={loadDeleteUser}
    />
  );
};

export default Home;
