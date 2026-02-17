import "../../../../public/assets/styles/main.css";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { signUpSchema, type RegisterForm } from "../core/_module";
const initialValues: RegisterForm = {
  id: "",
  name: "",
  email: "",
  password: "",
  conform_password: "",
  address: "",
  phone_no: "",
  is_view: false,
};

const REGISTER_API = import.meta.env.VITE_REGISTER_API;
// console.log(REGISTER_API);

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,

    onSubmit: async (values) => {
      const playload: RegisterForm = {
        id: new Date().getTime().toString(),
        name: values.name,
        email: values.email,
        password: values.password,
        conform_password: values.conform_password,
        address: values.address,
        phone_no: values.phone_no,
        is_view: false,
      };

      const LocalUser = JSON.parse(localStorage.getItem("Total_user") || "[]");

      try {
        const checkRes = await fetch(
          `${REGISTER_API}/register?email=${playload.email}`,
        );

        const existingUsers = await checkRes.json();

        if (existingUsers.length > 0) {
          toast.error("Email already used!");
          return;
        }
        const responce = await fetch(`${REGISTER_API}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playload),
        });

        // console.log(playload.email);

        if (responce.ok) {
          LocalUser.push(playload);
          localStorage.setItem("Total_user", JSON.stringify(LocalUser));
          resetForm();
          toast.success("Register successful!");
        }
      } catch (error) {
        toast.error("something want wrong!");
        console.error("Server error:", error);
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
      <div className="d-flex h-100 w-100  bg-ccc">
        <div className="font-serif   bg-image d-image-none">
          <div className="text-center">
            <h1 className="text-color">Get Start</h1>
            <h3 className="text-color-sm">Allready have an account !</h3>
            <button
              className="round-button"
              onClick={() => {
                navigate("/dashbord");
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
                  type="number"
                  name="phone_no"
                  placeholder="Enter phone number"
                  value={values.phone_no}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                />
                {errors.phone_no && touched.phone_no && (
                  <small className="text-danger">{errors.phone_no}</small>
                )}
              </div>    <div className="mb-3">
                <input
                  type="textarea"
                  name="address"
                  placeholder="Enter address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                />
                {errors.address && touched.address && (
                  <small className="text-danger">{errors.address}</small>
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
                  name="conform_password"
                  placeholder="Conform password"
                  value={values.conform_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                />
                {errors.conform_password && touched.conform_password && (
                  <small className="text-danger">
                    {errors.conform_password}
                  </small>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
              <p className="text-center">
                Do you have an account !{" "}
                <a href="/auth/login" className="text-decoration-none">
                  {" "}
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
