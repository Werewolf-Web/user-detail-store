import { Bounce, toast, ToastContainer } from "react-toastify";
import "../../../../public/assets/styles/main.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema, type Loginform } from "../core/_module";

const initialValues: Loginform = {
  email: "",
  password: "",
};

const REGISTER_API = import.meta.env.VITE_REGISTER_API;
// console.log(REGISTER_API);

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values) => {
      const playload: Loginform = {
        email: values.email,
        password: values.password,
      };
      try {
        const checkRes = await fetch(
          `${REGISTER_API}/register?email=${playload.email}&password=${playload.password}`,
        );

        const existingUsers = await checkRes.json();
        // console.log(existingUsers.id);
        if (existingUsers.length === 0) {
          toast.error("Email & Password not match ! ");
          return;
        }
        localStorage.setItem("Current_user", JSON.stringify(existingUsers));
        resetForm();
        toast.success("Login Success .. !");
        navigate("/dashbord");
      } catch {
        toast.error("something want wrong!");
      }
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

      <div className="center-all ">
        <div className="d-flex bg-darker container">
        <div className="font-serif bg-image d-image-none">
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
          <div className="p-4 w-75 ">
            <h3 className="text-center mb-4 font-serif text-title">Login Here</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-input form-control"
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
                  className="form-input form-control"
                />
                {errors.password && touched.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <p className="text-center text-white">
                Don't have an account !{" "}
                <a href="/auth/register" className="text-decoration-none">
                  {" "}
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default LoginPage;
