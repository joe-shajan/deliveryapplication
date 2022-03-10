import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    productname: Yup.string().required("Product name is required"),
    unit: Yup.string().required("Unit is required"),
    qty: Yup.number().typeError("Enter valid number").required("Quantity is required"),
    amount: Yup.number().typeError("Enter valid number").required("Amount is required"),
    exprmonths: Yup.number().typeError("Enter valid number").required("Expiry months is required"),
    category: Yup.string().required("Category is required"),
    units: Yup.number().typeError("Enter valid number").required("No of units is required"),
    description: Yup.string().required("Product description is required"),
    image1: Yup.mixed().required("Image is required"),
    image2: Yup.mixed().required("Image is required"),
    image3: Yup.mixed().required("Image is required"),
});
export default validationSchema