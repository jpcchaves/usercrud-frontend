import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useApi } from "../../../../hooks/useApi";
import { UserValidation } from "../../../../validation/UserValidation";
import EditUserView from "./view";
import userLoadUser from "../../../../hooks/userLoadUser";

const EditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { user, apiError } = userLoadUser(+id!);

  const [error, setError] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.name || "",
      username: user?.username || "",
      email: user?.email || "",
    },
    validationSchema: UserValidation,
    onSubmit: async (values) => {
      try {
        await useApi.put(`/user/${id}`, values);

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

  return (
    <EditUserView
      error={error}
      apiError={apiError}
      formik={formik}
      user={user}
    />
  );
};

export default EditUser;
