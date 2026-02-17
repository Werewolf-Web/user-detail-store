import { Route, Routes } from "react-router-dom";
import HomeAnimation from "../component/layout/home-animation/HomeAnimation";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Dashbord from "../component/home/dashbord/Dashbord";
import EditDetail from "../component/edit-detail/EditDetail";
import ViewDetail from "../component/view-detail/ViewDetail";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeAnimation />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={"404 Not Found"} />
        <Route path="/dashbord" element={<Dashbord/>}/>
        <Route path="/add-detail/:id" element={<EditDetail/>}/>
        <Route path="/view-detail/:id" element={<ViewDetail/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
