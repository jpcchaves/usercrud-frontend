import { useEffect, useState } from "react";
import { useApi } from "../../../../hooks/useApi";
import { User } from "../../../../types/User";

import HomeView from "./view";

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

  return <HomeView users={users} deleteUser={deleteUser} />;
};

export default Home;
