import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(40, "Password must not exceed 40 characters"),
  
});
export default validationSchema