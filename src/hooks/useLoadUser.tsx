import { useEffect, useState } from "react";
import { useApi } from "./useApi";
import { User } from "../types/User";

const useLoadUser = (id: number) => {
  const [user, setUser] = useState<User>(Object);
  const [apiError, setApiError] = useState([]);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    if (id) {
      userLoadUser(+id);
    }
  }, []);

  const userLoadUser = async (id: number) => {
    try {
      const res = await useApi.get(`user/${id}`);
      const user: User = res.data;

      setUser(user);
      setIsUserLoading(false);
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        setApiError(Object.values(data));
      }
      console.log(error.message);

      setTimeout(() => {
        setApiError([]);
      }, 2000);
      setIsUserLoading(false);
    }
  };

  return {
    user,
    apiError,
    isUserLoading,
  };
};

export default useLoadUser;
