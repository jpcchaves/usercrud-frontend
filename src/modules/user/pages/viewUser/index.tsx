import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import ViewUserView from "./view";

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

  return <ViewUserView user={user} />;
};

export default ViewUser;
