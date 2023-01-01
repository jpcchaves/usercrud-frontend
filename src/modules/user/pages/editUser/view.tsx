import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Input } from "reactstrap";
import { FormikHelpers } from "formik/dist/types";
import { FormFeedback } from "reactstrap";
import { UserProps } from "../../../../types/UserProps";
import { User } from "../../../../types/User";
import Spinner from "../../../../components/Spinner";

interface EditUserProps extends UserProps {
  user: User;
  error: any;
  apiError: never[];
  loading: boolean;
  isUserLoading: boolean;
}

const EditUserView = ({
  user,
  error,
  apiError,
  formik,
  loading,
  isUserLoading,
}: EditUserProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">
            Editando o Usuário:{" "}
            {isUserLoading ? "Buscando dados..." : user.name}
          </h2>
          <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
            }}
            onSubmit={function (
              values: { name: string; username: string; email: string },
              formikHelpers: FormikHelpers<{
                name: string;
                username: string;
                email: string;
              }>
            ): void | Promise<any> {
              throw new Error("Function not implemented.");
            }}
          >
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
                return false;
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Digite seu nome..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={
                    isUserLoading ? "Buscando dados..." : formik.values.name
                  }
                  invalid={
                    formik.touched.name && formik.errors.name ? true : false
                  }
                />
                {formik.touched.name && formik.errors.name ? (
                  <FormFeedback type="invalid">
                    {formik.errors.name}
                  </FormFeedback>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Usuário
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Digite seu usuário..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={
                    isUserLoading ? "Buscando dados..." : formik.values.username
                  }
                  invalid={
                    formik.touched.username && formik.errors.username
                      ? true
                      : false
                  }
                />
                {formik.touched.username && formik.errors.username ? (
                  <FormFeedback type="invalid">
                    {formik.errors.username}
                  </FormFeedback>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Digite seu email..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={
                    isUserLoading ? "Buscando dados..." : formik.values.email
                  }
                  invalid={
                    formik.touched.email && formik.errors.email ? true : false
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormFeedback type="invalid">
                    {formik.errors.email}
                  </FormFeedback>
                ) : null}
              </div>
              {apiError.length ? (
                <div className="bg-danger rounded px-2 my-2">
                  <p className="text-white">{apiError}</p>
                </div>
              ) : null}
              {error && (
                <div className="d-flex aligns-items-center justify-content-center bg-danger rounded mb-3 text-center">
                  <div className="text-white p-2">
                    {typeof error !== "string" ? error[0] : error}
                  </div>
                </div>
              )}
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className={
                    loading || isUserLoading
                      ? "d-flex align-items-center justify-content-center btn btn-outline-primary cursor-na"
                      : "btn btn-outline-primary"
                  }
                  disabled={loading || isUserLoading ? true : false}
                >
                  {loading || isUserLoading ? <Spinner /> : "Editar"}
                </button>
                <Link
                  to="/"
                  className={`d-flex align-items-center justify-content-center btn btn-outline-danger mx-2 ${
                    loading || isUserLoading ? "disabled" : ""
                  }`}
                >
                  Cancelar
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditUserView;
