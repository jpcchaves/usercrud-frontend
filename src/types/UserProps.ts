import { FormikValues } from "formik/dist/types";

export interface UserProps {
  error: any;
  formik: FormikValues;
  loading: boolean;
}
