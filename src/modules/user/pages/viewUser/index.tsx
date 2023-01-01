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

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await useApi.get(`/user/${id}`);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return <ViewUserView user={user} loading={loading} />;
};

export default ViewUser;
