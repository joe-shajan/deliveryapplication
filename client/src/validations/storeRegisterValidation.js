import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname name is required"),
    lastname: Yup.string().required("Lastname is required"),
    storename: Yup.string().required("Storename is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string().required("Email is required"),
    phoneno: Yup.number().typeError("Enter valid phoneno number").required("phoneno is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(40, "Password must not exceed 40 characters"),
    repassword: Yup.string().required("Confirm Password is required").oneOf(
        [
            Yup.ref("password"), null
        ],
        "Confirm Password does not match"
    ),
    logo: Yup.mixed().required("Logo is required"),
});
export default validationSchema