import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(20).matches(/^[A-Za-z\s]+$/, "Only characters are allowed").required("pelease  enter your name "),
    email: Yup.string().email().required("pelease entere your email"),
    password: Yup.string().min(6).required("pelease enter password"),
    conform_password: Yup.string().required("pelease enter conform password").oneOf([Yup.ref("password")], "password must match"),
    address: Yup.string().required("pelease enter your address"),
   phone_no: Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("Please enter your phone number"),
});


export interface RegisterForm{
    id: string,
    name : string,
    email : string,
    password : string,
    conform_password : string,
    address:string,
    phone_no : number | string,
}
