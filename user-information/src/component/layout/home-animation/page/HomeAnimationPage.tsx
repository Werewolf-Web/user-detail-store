import { useNavigate } from "react-router-dom";
import "../../../../../public/assets/styles/main.css";

const HomeAnimationPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-dark-full text-white min-vh-100 d-flex align-items-center justify-content-center page-enter"
        style={{ height: "820px" }}
      >
        <div className="text-center align-items-center">
          <h1 className="font-roboto fw-bold fs-1 px-2">
            User Information...!
          </h1>
          <p className="fs-5 ">
            Use to store a User personal information & store information
          </p>
          <button
            className="btn bg-primary text-white "
            onClick={() => {
              navigate(`/auth/register`);
            }}
          >
            {" "}
            Get Start
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeAnimationPage;
