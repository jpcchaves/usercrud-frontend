import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import { UserValidation } from "../../../../validation/UserValidation";
import AddUserView from "./view";

const AddUser = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<never[] | string>("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      username: "",
      email: "",
    },
    validationSchema: UserValidation,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        await useApi.post("/user", values);

        navigate("/");
      } catch (error: any) {
        setLoading(false);
        if (error.response) {
          const { data } = error.response;
          setError(Object.values(data));
        } else {
          setError("Ocorreu um erro inesperado... Tente novamente mais tarde.");
        }

        setTimeout(() => {
          setError("");
        }, 2000);
      }
    },
  });

  return <AddUserView error={error} formik={formik} loading={loading} />;
};

export default AddUser;
