import "../../../../public/assets/styles/main.css";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import {signUpSchema,type RegisterForm} from "../core/_module"

const initialValues : RegisterForm = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
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
            <h3 className="text-color-sm">Allready have an account !</h3>
            <button
              className="round-button"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              {" "}
              Login Here..
            </button>
          </div>
        </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 w-75">

        <h3 className="text-center mb-4">Register Here</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.name && touched.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>

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

          <div className="mb-3">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.confirm_password && touched.confirm_password && (
              <small className="text-danger">{errors.confirm_password}</small>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={() => toast.success("Register successful!")}
          >
            Register
          </button>
        </form>

      </div>
    </div>
      </div>
    </>
  );
};

export default RegisterPage;
