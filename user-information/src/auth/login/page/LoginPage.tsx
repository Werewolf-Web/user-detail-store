import "../../../../src/assets/styles/main.css";
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
       <div className="d-flex h-100 w-100  ">
        <div className="font-serif  w-55 h-73 py-5 bg-image">
            <div className="text-center">
              <h1 className="text-color">Get Start</h1>
              <h3 className="text-color-sm">You don't have an account..!</h3>
              <button className="round-button" onClick={()=>{
                navigate('/auth/register')
              }}> Register Here</button>
            </div>
        </div>
        <div className="h-100">
            <div className="bg-danger">
              <h3>Login Here.. </h3>
              <div>
                <input type="email" />

              </div>
              <div>
                <input type="password" />
              </div>
              <div>
                <button>Login </button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
