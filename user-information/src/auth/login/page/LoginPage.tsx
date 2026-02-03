import { Bounce, ToastContainer, toast } from "react-toastify";
import "../../../../public/assets/styles/main.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {loginSchema ,type Loginform} from "../core/_module"


const initialValues : Loginform = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
        console.log(errors);
      },
    });


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2300}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />

      <div className="d-flex h-100 w-100  ">
        <div className="font-serif  w-55 h-73 py-5 bg-image">
          <div className="text-center">
            <h1 className="text-color">Get Start</h1>
            <h3 className="text-color-sm">You don't have an account..!</h3>
            <button
              className="round-button"
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Register Here
            </button>
          </div>
        </div>
 
  <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 w-75">

        <h3 className="text-center mb-4">Login Here</h3>

        <form onSubmit={handleSubmit}>


          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.email && touched.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.password && touched.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>



          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={() => toast.success("Login successful!")}
          >
            Login
          </button>
        </form>

      </div>
    </div>

      </div>
    </>
  );
};

export default LoginPage;
