import { useNavigate, useParams } from "react-router-dom"
import "../../../../public/assets/styles/main.css"
import { useEffect, useState } from "react";
import { type ViewUsersDetail } from "../core/_module"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';


const ViewDetailPage = () => {

    const { id } = useParams();
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

    console.log("==", viewData);
    const handleBack = () => {
        navigate('/dashbord')
    }
    const handlePrint = () => {
        window.print();
    }
    return (
        <>

            <div className="">
                <div className=" bg-darker-edit1 container">
                <div className="d-flex justify-content-between align-items-center no-print mb-2">
                    <div>

                        <button className="round-button" onClick={handleBack} >
                            <ArrowBackIcon /> Back
                        </button>
                    </div>
                    <div className="d-flex gap-2">

                        <button className="round-button" onClick={handlePrint}>
                            <LocalPrintshopIcon />  Print
                        </button>
                    </div>
                </div>
                <div className="print-container">
                    {/* Personal Details */}
                    <div>
                        <p className="bg-title">Personal Detail :</p>
                        <div className="d-flex gap-5">
                            <div>
                                <label className="bg-lable text-lable">First Name *</label>
                                <br />
                                <input
                                    name="name"
                                    value={viewData?.name}
                                    type="text"
                                    className="for-input form-control"
                                />

                            </div>
                            <div>
                                <label className="bg-lable text-lable">Last Name *</label>
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
                                <label className="bg-lable text-lable">Email *</label>
                                <br />
                                <input
                                    name="email"
                                    value={viewData?.email}
                                    type="email"
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Phone Number *</label>
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
                                <label className="bg-lable text-lable">Birth Date *</label>
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
                                    <label className="bg-lable text-lable">Gender *</label>
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
                                <label className="bg-lable text-lable">Age *</label>
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
                                <label className="bg-lable text-lable">Address *</label>
                                <br />
                                <textarea
                                    name="address"
                                    value={viewData?.address}
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">City *</label>
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
                                <label className="bg-lable text-lable">State *</label>
                                <br />
                                <input
                                    name="state"
                                    type="text"
                                    value={viewData?.state}
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Pincode *</label>
                                <br />
                                <input
                                    name="pincode"
                                    value={viewData?.pincode}
                                    type="number"
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Country *</label>
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
                                <label className="bg-lable text-lable">Father Name *</label>
                                <br />
                                <input
                                    name="father_name"
                                    value={viewData?.father_name}
                                    type="text"
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Birth Date *</label>
                                <br />
                                <input
                                    name="father_dob"
                                    type="text"
                                    value={viewData?.father_dob}
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Age *</label>
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
                                <label className="bg-lable text-lable">Mother Name *</label>
                                <br />
                                <input
                                    name="mother_name"
                                    type="text"
                                    value={viewData?.mother_name}
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Birth Date *</label>
                                <br />
                                <input
                                    name="mother_dob"
                                    value={viewData?.mother_dob}
                                    type="text"
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Age *</label>
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
                                <label className="bg-lable text-lable">School Name *</label>
                                <br />
                                <input
                                    name="school_name"
                                    type="text"
                                    value={viewData?.school_name}
                                    className="for-input form-control"
                                />
                            </div>
                            <div>
                                <label className="bg-lable text-lable">Passing Year *</label>
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
                            <label className="bg-lable text-lable">Standard *</label>
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
                                <label className="bg-lable text-lable">College Name *</label>
                                <br />
                                <input
                                    name="collage_name"
                                    type="text"
                                    value={viewData?.collage_name}
                                    className="for-input form-control"
                                />

                            </div>
                            <div>
                                <label className="bg-lable text-lable">Passing Year *</label>
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
                            <label className="bg-lable text-lable">Degree *</label>
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
                                <label className="bg-lable text-lable">Account Name *</label>
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
                                <label className="bg-lable text-lable">Account No. *</label>
                                <br />
                                <input
                                    name="accoount_no"
                                    value={viewData?.accoount_no}
                                    type="text"
                                    className="for-input form-control"
                                />

                            </div>
                            <div>
                                <label className="bg-lable text-lable">Ifsc Code *</label>
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
                                <label className="bg-lable text-lable">Account Type *</label>
                                <br />
                                <input
                                    name="account_type"
                                    value={viewData?.account_type}
                                    type="text"
                                    className="for-input form-control"
                                />

                            </div>
                            <div>
                                <label className="bg-lable text-lable">Bank Name *</label>
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
                                <label className="bg-lable text-lable">Company Name *</label>
                                <br />
                                <input
                                    name="company_name"
                                    value={viewData?.company_name}
                                    type="text"
                                    className="for-input form-control"
                                />

                            </div>
                            <div>
                                <label className="bg-lable text-lable">Address *</label>
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
                                <label className="bg-lable text-lable">Joining Date *</label>
                                <br />
                                <input
                                    name="jooining_date"
                                    type="date"
                                    value={viewData?.jooining_date}
                                    className="for-input form-control"
                                />

                            </div>
                            <div>
                                <label className="bg-lable text-lable">Salary *</label>
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

        </div></>
    )
}

export default ViewDetailPage