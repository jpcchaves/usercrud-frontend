import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import { UserValidation } from "../../../../validation/UserValidation";
import AddUserView from "./view";

const AddUser = () => {
  const navigate = useNavigate();

  const [error, setError] = useState([]);

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
        await useApi.post("/user", values);

        navigate("/");
      } catch (error: any) {
        if (error.response) {
          const { data } = error.response;
          setError(Object.values(data));
        }
        console.log(error.message);
      }
    },
  });

  return <AddUserView  error={error} formik={formik} />;
};

export default AddUser;
