import { Route, Routes } from "react-router-dom"
import HomeAnimation from "../component/layout/home-animation/HomeAnimation"
import Login from "../auth/login/Login"
import Register from "../auth/register/Register"

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomeAnimation/>} />
        <Route path="/auth/login" element={<Login/>}/>
                <Route path="/auth/register" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes