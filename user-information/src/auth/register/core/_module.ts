import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("pelease  enter your name "),
    email: Yup.string().email().required("pelease entere your email"),
    password: Yup.string().min(6).required("pelease enter password"),
    conform_password: Yup.string().required("pelease enter conform password").oneOf([Yup.ref("password")], "password must match"),
});


export interface RegisterForm{
    name : string,
    email : string,
    password : string,
    conform_password : string,

}
export interface ForOther{
    use: string,
    email :string,
}