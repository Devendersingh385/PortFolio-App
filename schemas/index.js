import * as Yup from 'yup';

export const contactUsSchema = Yup.object({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Textarea is required"),
})