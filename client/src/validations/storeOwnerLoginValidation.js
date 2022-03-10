import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    EmailOrPhone: Yup.string().required("Email or phone is required"),
    Password: Yup.string().required("Password is required"),
    
});
export default validationSchema