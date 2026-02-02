import "../../../../src/assets/styles/main.css";
import { useNavigate } from 'react-router-dom';



const RegisterPage = () => {
  const navigate = useNavigate();;
  return (
    <>
      <div className="d-flex h-100 w-100  ">
        <div className="font-serif  w-55 h-73 py-5 bg-image">
            <div className="text-center">
              <h1 className="text-color">Get Start</h1>
              <h3 className="text-color-sm">Allready have an account !</h3>
              <button className="round-button"
              onClick={()=>{
                navigate('/auth/login')
              }}
              > Login Here..</button>
            </div>
        </div>
        <div className="h-100">
            <div>
              <h3> Register here </h3>
            </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
