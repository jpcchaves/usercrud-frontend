import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import { UserValidation } from "../../../../validation/UserValidation";
import AddUserView from "./view";

const AddUser = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<never[] | string>("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      username: "",
      email: "",
    },
    // validationSchema: UserValidation,
    onSubmit: async (values) => {
      try {
        await useApi.post("/user", values);

        navigate("/");
      } catch (error: any) {
        if (error.response) {
          const { data } = error.response;
          setError(Object.values(data));
        } else if (!error.response.data) {
          setError("Ocorreu um erro inesperado... Tente novamente mais tarde.");
        } else {
          console.log(error.message);
        }

        setTimeout(() => {
          setError("");
        }, 2000);
      }
    },
  });

  return <AddUserView error={error} formik={formik} />;
};

export default AddUser;
