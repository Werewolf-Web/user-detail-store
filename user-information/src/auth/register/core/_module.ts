import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("pelease  enter your name "),
    email: Yup.string().email().required("pelease entere your email"),
    password: Yup.string().min(6).required("pelease enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password")], "password must match"),
});


export interface RegisterForm{
    name : string,
    email : string,
    password : string,
    confirm_password : string

}