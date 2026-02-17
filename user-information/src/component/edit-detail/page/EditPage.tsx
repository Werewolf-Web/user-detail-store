import { useNavigate, useParams } from "react-router-dom"
import "../../../../public/assets/styles/main.css"
import { useEffect, useState } from "react";
import {type UsersDetail} from "../core/_module"
const EditPage = () => {

const REGISTER_API = import.meta.env.VITE_REGISTER_API;
  const { id } = useParams();
  const navigate = useNavigate();


  const [userData, setUserData] = useState<UsersDetail[]>([]);
  
  const handleDiscard = ()=>{
    navigate(`/dashbord`)
  }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${REGISTER_API}/register?id=${id}`);
          const data: UsersDetail[] = await res.json();
  
          setUserData(data);
        } catch (error) {
          console.error("API Error:", error);
        }
      };
  
      fetchData();
    }, [id]);
{userData.map((item) => (
  console.log(item)
))
  
}
  
  return (
    <>  <h1>{id}</h1>
    {userData.map((item) => (
     <div className="d-flex gap-5">
            <div className="">

              <label className="bg-lable" >First Name *</label><br />
              <input type="text" className="for-input form-control " value={item.name}/>
            </div>
            <div className="">
              <label className="bg-lable" >emial *</label><br />
              <input type="text" className="for-input form-control" value={item.email}/>
            </div>
          </div>
))
        
}
      {/* <div className="container bg-ccc mb-5 ">
        <div>
          <p className="bg-title">Personal Detail : </p>
          <div className="d-flex gap-5">
            <div className="">

              <label className="bg-lable" >First Name *</label><br />
              <input type="text" className="for-input form-control " />
            </div>
            <div className="">
              <label className="bg-lable" >Last Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
          </div>
          <div className="d-flex gap-5" >
            <div className="">

              <label className="bg-lable" >Email *</label><br />
              <input type="email" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Phone Number *</label><br />
              <input type="number" className="for-input form-control" />
            </div>
          </div>
          <div className="d-flex gap-5" >
            <div className="">

              <label className="bg-lable" >Birth Date *</label><br />
              <input type="date" className="for-input form-control" />
            </div>
        <div className="form-row">
    <div className="form-group">
      <label className="bg-lable">Gender *</label>
      <div className="radio-group">
        <label><input type="radio" name="gender" /> Male</label>
        <label><input type="radio" name="gender" /> Female</label>
      </div>
    </div>
  </div>
            <div className="">
              <label className="bg-lable" >Age *</label><br />
              <input type="number" className="for-input form-control" />
            </div>
          </div>
          <div className="d-flex gap-5" >
            <div className="">
              <label className="bg-lable" >Address *</label><br />
              <textarea name="addres" id="" className="for-input form-control"></textarea>
            </div>      <div className="">

              <label className="bg-lable" >City *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
          </div>
          <div className="d-flex gap-5" >

            <div className="">

              <label className="bg-lable" >State *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
            <div className="">

              <label className="bg-lable" >Pincode *</label><br />
              <input type="number" className="for-input form-control" />
            </div>
            <div className="">

              <label className="bg-lable" >Country *</label><br />
              <select id="cars" name="cars" className="for-input form-control">
                <option value="volvo">India</option>
                <option value="saab">Japan</option>
                <option value="fiat">Jersey</option>
                <option value="audi">Liberia</option>
              </select>
            </div>

          </div>

        </div>
        <div>
          <p className="bg-title">Parent's Detail : </p>
          <div className="d-flex gap-5" >
            <div className="">

              <label className="bg-lable" >Father Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Birth Date *</label><br />
              <input type="date" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Age *</label><br />
              <input type="number" className="for-input form-control" />
            </div>
          </div>
          <div className="d-flex gap-5" >
            <div className="">

              <label className="bg-lable" >Mother Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Birth Date *</label><br />
              <input type="date" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Age *</label><br />
              <input type="number" className="for-input form-control" />
            </div>
          </div>
        </div>
        <div>

          <p className="bg-title">Education Detail : </p>
          <div className="d-flex gap-5" >
            <div className="">

              <label className="bg-lable" >School Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Passing Year *</label><br />
              <input type="date" className="for-input form-control" />
            </div>

          </div>
          <div className="">

            <label className="bg-lable" >Standard *</label><br />
            <select id="cars" name="cars" className="for-input form-control">
              <option value="volvo">12th</option>
              <option value="saab">10th</option>

            </select>
          </div>
          <div className="d-flex gap-5" >
            <div className="">

              <label className="bg-lable" >Collage Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Passing Year *</label><br />
              <input type="date" className="for-input form-control" />
            </div>

          </div>
          <div className="">

            <label className="bg-lable" >Degree *</label><br />
            <select id="cars" name="cars" className="for-input form-control">
              <option value="volvo">MCA</option>
              <option value="saab">Mcom</option>
              <option value="fiat">Phd</option>
              <option value="audi">Bcom</option>
            </select>
          </div>
        </div>
        <div>
          <p className="bg-title">Bank Detail : </p>
          <div className="d-flex gap-5">
            <div className="">

              <label className="bg-lable" >Account Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>

          </div>
          <div className="d-flex gap-5">
            <div className="">

              <label className="bg-lable" >Account No. *</label><br />
              <input type="text" className="for-input form-control" />
            </div>

          </div>
          <div className="d-flex gap-5">
            <div className="">

              <label className="bg-lable" >Account Type *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Bank Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
          </div>
        </div>
        <div>
          <p className="bg-title">Job Detail : </p>
          <div className="d-flex gap-5">
            <div className="">

              <label className="bg-lable" >Companny Name *</label><br />
              <input type="text" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Address *</label><br />
              <textarea name="addres" id="" className="for-input form-control"></textarea>
            </div>
          </div>
          <div className="d-flex gap-5" >
            <div className="">
              <label className="bg-lable" >Joining Date *</label><br />
              <input type="date" className="for-input form-control" />
            </div>
            <div className="">
              <label className="bg-lable" >Salary *</label><br />
              <input type="number" className="for-input form-control" />
            </div>
          </div>
        </div>
        <div>

          <p className="bg-title">Document's uplode : </p>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label > ADHAR CARD : </label>
            <input type="file" id="myfile" name="myfile"></input><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label >PAN CARD : </label>
            <input type="file" id="myfile" name="myfile"></input><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label >VOTING CARD :  </label>
            <input type="file" id="myfile" name="myfile"></input>

          </div>
        </div>
        <div className="d-flex text-center align-items-center gap-4">
          <button className="round-button" onClick={handleDiscard}>
            Discard
          </button>
          <button className="round-button">
            submit
          </button>
        </div>
      </div> */}
    </>
  )
}

export default EditPage
