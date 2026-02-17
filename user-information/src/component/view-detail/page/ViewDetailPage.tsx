import { useNavigate,  useParams } from "react-router-dom"
import "../../../../public/assets/styles/main.css"
import { useEffect, useState } from "react";
import {type ViewUsersDetail} from "../core/_module"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import * as XLSX from "xlsx";


const ViewDetailPage = () => {

const {id}= useParams();
const REGISTER_API = import.meta.env.VITE_REGISTER_API;
const [viewData, setViewData] = useState<ViewUsersDetail | null>(null);

const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`${REGISTER_API}/register?id=${id}`);
          const data: ViewUsersDetail[] = await res.json();
  
          setViewData(data[0]);
        } catch (error) {
          console.error("API Error:", error);
        }
      };
  
      fetchData();
    }, [id]);

console.log("==",viewData);
const handleBack=()=>{
navigate('/dashbord')
}
const exportData =[{
id:viewData?.id,
    name:viewData?.name ,
    email:viewData?.email ,
    address:viewData?.address ,
    phone_no:  viewData?.phone_no ,
    last_name:viewData?.last_name ,
    bdate:viewData?.bdate ,
    gender:viewData?.gender ,
    age:  viewData?.age ,
    city:viewData?.city ,
    state:viewData?.state ,
    pincode:  viewData?.pincode ,
    country:viewData?.country ,
    father_name:viewData?.father_name ,
    father_dob:viewData?.father_dob ,
    father_age:  viewData?.father_age,
    mother_name:viewData?.mother_name ,
    mother_dob:viewData?.mother_dob ,
    mother_age:  viewData?.mother_age ,
    school_year:  viewData?.school_year ,
    school_name:viewData?.school_name ,
    standard:viewData?.standard ,
    collage_year:  viewData?.collage_year ,
    collage_name:viewData?.collage_name ,
    degree:viewData?.degree ,
    account_name:viewData?.account_name ,
    account_type:viewData?.account_type ,
    bank_name:viewData?.bank_name ,
    accoount_no:viewData?.accoount_no,
    ifsc_code:  viewData?.ifsc_code ,
    company_name:viewData?.collage_name ,
    company_address:viewData?.company_address ,
    jooining_date:viewData?.jooining_date ,
    salary:  viewData?.salary ,

}]
    



const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "user_data.xlsx");
  };


  const handlePrint =()=>{
    window.print();
  }
    return (
        <>
        <p>{id}</p>
            <div className="container bg-ccc mb-5">
               <div className="d-flex justify-content-between align-items-center no-print mb-2">
          <div>
   
            <button className="round-button" onClick={handleBack} >
           <ArrowBackIcon/> Back
            </button>
          </div>
          <div className="d-flex gap-2">
            <button className="round-button" onClick={handleExport} >
            <DownloadForOfflineIcon/>  Export
            </button>
            <button className="round-button" onClick={handlePrint}>
            <LocalPrintshopIcon/>  Print
            </button>
          </div>
        </div>
        <div className="print-container">
                {/* Personal Details */}
                <div>
                    <p className="bg-title">Personal Detail :</p>
                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">First Name *</label>
                            <br />
                            <input
                                name="name"
                                value={viewData?.name}
                                type="text"
                                className="for-input form-control"
                            />

                        </div>
                        <div>
                            <label className="bg-lable">Last Name *</label>
                            <br />
                            <input
                                name="last_name"
                                value={viewData?.last_name}
                                type="text"
                                className="for-input form-control"
                            />

                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Email *</label>
                            <br />
                            <input
                                name="email"
                                value={viewData?.email}
                                type="email"
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Phone Number *</label>
                            <br />
                            <input
                                name="phone_no"
                                value={viewData?.phone_no}
                                type="number"
                                className="for-input form-control"
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Birth Date *</label>
                            <br />
                            <input
                                name="bdate"
                                value={viewData?.bdate}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                        <div className="form-row">
                    <div>
                            <label className="bg-lable">Gender *</label>
                            <br />
                            <input
                                name="gender"
                                value={viewData?.gender}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                        </div>
                        <div>
                            <label className="bg-lable">Age *</label>
                            <br />
                            <input
                                name="age"
                                type="number"
                                value={viewData?.age}
                                className="for-input form-control"
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Address *</label>
                            <br />
                            <textarea
                                name="address"
                                value={viewData?.address}
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">City *</label>
                            <br />
                            <input
                                name="city"
                                value={viewData?.city}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">State *</label>
                            <br />
                            <input
                                name="state"
                                type="text"
                                value={viewData?.state}
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Pincode *</label>
                            <br />
                            <input
                                name="pincode"
                                value={viewData?.pincode}
                                type="number"
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Country *</label>
                            <br />
                            <input
                                name="country"
                                value={viewData?.country}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="bg-title">Parent's Detail :</p>
                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Father Name *</label>
                            <br />
                            <input
                                name="father_name"
                                value={viewData?.father_name}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Birth Date *</label>
                            <br />
                            <input
                                name="father_dob"
                                type="text"
                                value={viewData?.father_dob}
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Age *</label>
                            <br />
                            <input
                                name="father_age"
                                value={viewData?.father_age}
                                type="number"
                                className="for-input form-control"
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Mother Name *</label>
                            <br />
                            <input
                                name="mother_name"
                                type="text"
                                value={viewData?.mother_name}
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Birth Date *</label>
                            <br />
                            <input
                                name="mother_dob"
                                value={viewData?.mother_dob}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Age *</label>
                            <br />
                            <input
                                name="mother_age"
                                type="number"
                                value={viewData?.mother_age}
                                className="for-input form-control"
                            />
                        </div>
                    </div>
                </div>

                {/* Education Details */}
                <div>
                    <p className="bg-title">Education Detail :</p>
                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">School Name *</label>
                            <br />
                            <input
                                name="school_name"
                                type="text"
                                value={viewData?.school_name}
                                className="for-input form-control"
                            />
                        </div>
                        <div>
                            <label className="bg-lable">Passing Year *</label>
                            <br />
                            <input
                                name="school_year"
                                value={viewData?.school_year}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="bg-lable">Standard *</label>
                        <br />
                         <input
                                name="standard"
                                value={viewData?.standard}
                                type="text"
                                className="for-input form-control"
                            />
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">College Name *</label>
                            <br />
                            <input
                                name="collage_name"
                                type="text"
                                value={viewData?.collage_name}
                                className="for-input form-control"
                            />

                        </div>
                        <div>
                            <label className="bg-lable">Passing Year *</label>
                            <br />
                            <input
                                name="collage_year"
                                value={viewData?.collage_year}
                                type="text"
                                className="for-input form-control"
                            />

                        </div>
                    </div>

                    <div>
                        <label className="bg-lable">Degree *</label>
                        <br />
                    <input
                            name="degree"
                                value={viewData?.degree}
                                type="text"
                                className="for-input form-control"
                            />
                         
                            
                    
                    </div>
                </div>

                {/* Bank Details */}
                <div>
                    <p className="bg-title">Bank Detail :</p>
                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Account Name *</label>
                            <br />
                            <input
                                name="account_name"
                                type="text"
                                value={viewData?.account_name}
                                className="for-input form-control"
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Account No. *</label>
                            <br />
                            <input
                                name="accoount_no"  
                                value={viewData?.accoount_no}
                                type="text"
                                className="for-input form-control"
                            />

                        </div>
                        <div>
                            <label className="bg-lable">Ifsc Code *</label>
                            <br />
                            <input
                                name="ifsc_code"
                                value={viewData?.ifsc_code}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Account Type *</label>
                            <br />
                            <input
                                name="account_type"
                                value={viewData?.account_type}
                                type="text"
                                className="for-input form-control"
                            />

                        </div>
                        <div>
                            <label className="bg-lable">Bank Name *</label>
                            <br />
                            <input
                                name="bank_name"
                                value={viewData?.bank_name}
                                type="text"
                                className="for-input form-control"
                            />
                        </div>
                    </div>
                </div>

                {/* Job Details */}
                <div>
                    <p className="bg-title">Job Detail :</p>
                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Company Name *</label>
                            <br />
                            <input
                                name="company_name"
                                value={viewData?.company_name}
                                type="text"
                                className="for-input form-control"
                            />

                        </div>
                        <div>
                            <label className="bg-lable">Address *</label>
                            <br />
                            <textarea
                                name="company_address"
                                value={viewData?.address}
                                className="for-input form-control"
                            />

                        </div>
                    </div>

                    <div className="d-flex gap-5">
                        <div>
                            <label className="bg-lable">Joining Date *</label>
                            <br />
                            <input
                                name="jooining_date"
                                type="date"
                                value={viewData?.jooining_date}
                                className="for-input form-control"
                            />

                        </div>
                        <div>
                            <label className="bg-lable">Salary *</label>
                            <br />
                            <input
                                name="salary"
                                type="number"
                                value={viewData?.salary}
                                className="for-input form-control"
                            />

                        </div>
                    </div>
                </div>

               </div>
            </div>

        </>
    )
}

export default ViewDetailPage