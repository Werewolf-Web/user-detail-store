import { useNavigate, useParams } from "react-router-dom";
import "../../../../public/assets/styles/main.css";
import { useEffect, useState } from "react";
import { type UsersDetail, EditSchema } from "../core/_module";
import { useFormik } from "formik";

const EditPage = () => {
  const REGISTER_API = import.meta.env.VITE_REGISTER_API;
  const { id } = useParams();
  const navigate = useNavigate();

  // State for fetched user data
  const [userData, setUserData] = useState<UsersDetail | null>(null);

  // Formik initial values (will be updated after fetch)
  const initialValues: UsersDetail = {
    name: "",
    email: "",
    address: "",
    phone_no: "",
    last_name: "",
    bdate: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    father_name: "",
    father_dob: "",
    father_age: "",
    mother_name: "",
    mother_dob: "",
    mother_age: "",
    school_year: "",
    school_name: "",
    standard: "",
    collage_year: "",
    collage_name: "",
    degree: "",
    account_name: "",
    account_type: "",
    bank_name: "",
    accoount_no: "",         // Note: typo in field name – keep consistent with your type
    ifsc_code: "",
    company_name: "",
    company_address: "",
    jooining_date: "",        // Note: typo in field name – keep consistent
    salary: "",
    adhar_card_url: "",
    pan_card_url: "",
    voting_card_url: "",
    is_view: true,
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setValues,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: EditSchema,
     onSubmit: async (values) => {
      try {

    const updatedData = {
      ...values,
      id: Number(id),
     is_view: true,     };
        // ✅ Update localStorage
        const storedUsers = JSON.parse(
          localStorage.getItem("Total_user") || "[]"
        );

        const updatedUsers = storedUsers.map((user: any) =>
          user.id === Number(id) ? { ...values, id: Number(id) } : user
        );

        localStorage.setItem("Total_user", JSON.stringify(updatedUsers));

        // ✅ Update API
        const response = await fetch(
          `${REGISTER_API}/register/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (!response.ok) {
          throw new Error("API update failed");
        }

        console.log("Update successful");

        navigate("/dashbord");
      } catch (error) {
        console.error("Update error:", error);
      }
    },
  });

  // Fetch user data on mount or when id changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${REGISTER_API}/register?id=${id}`);
        const data: UsersDetail[] = await res.json();
        if (data.length > 0) {
          setUserData(data[0]);               // Store first (and only) user
          setValues(data[0]);                  // Populate form with fetched data
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, setValues]);

  const handleDiscard = () => {
    navigate("/dashbord");
  };

  return (
    <>
      <h1>Editing User ID: {id}</h1>
      {userData && (
        <form onSubmit={handleSubmit}>
          <div className="container bg-ccc mb-5">
            {/* Personal Details */}
            <div>
              <p className="bg-title">Personal Detail :</p>
              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">First Name *</label>
                  <br />
                  <input
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Last Name *</label>
                  <br />
                  <input
                    name="last_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.last_name}
                  />
                  {errors.last_name && touched.last_name && (
                    <small className="text-danger">{errors.last_name}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Email *</label>
                  <br />
                  <input
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    className="for-input form-control"
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Phone Number *</label>
                  <br />
                  <input
                    name="phone_no"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    className="for-input form-control"
                    value={values.phone_no}
                  />
                  {errors.phone_no && touched.phone_no && (
                    <small className="text-danger">{errors.phone_no}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Birth Date *</label>
                  <br />
                  <input
                    name="bdate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="date"
                    className="for-input form-control"
                    value={values.bdate}
                  />
                  {errors.bdate && touched.bdate && (
                    <small className="text-danger">{errors.bdate}</small>
                  )}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="bg-lable">Gender *</label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={values.gender === "male"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />{" "}
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={values.gender === "female"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />{" "}
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="bg-lable">Age *</label>
                  <br />
                  <input
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    className="for-input form-control"
                    value={values.age}
                  />
                  {errors.age && touched.age && (
                    <small className="text-danger">{errors.age}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Address *</label>
                  <br />
                  <textarea
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="for-input form-control"
                    value={values.address}
                  />
                  {errors.address && touched.address && (
                    <small className="text-danger">{errors.address}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">City *</label>
                  <br />
                  <input
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.city}
                  />
                  {errors.city && touched.city && (
                    <small className="text-danger">{errors.city}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">State *</label>
                  <br />
                  <input
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.state}
                  />
                  {errors.state && touched.state && (
                    <small className="text-danger">{errors.state}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Pincode *</label>
                  <br />
                  <input
                    name="pincode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    className="for-input form-control"
                    value={values.pincode}
                  />
                  {errors.pincode && touched.pincode && (
                    <small className="text-danger">{errors.pincode}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Country *</label>
                  <br />
                  <select
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="for-input form-control"
                    value={values.country}
                  >
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Liberia">Liberia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent's Details */}
            <div>
              <p className="bg-title">Parent's Detail :</p>
              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Father Name *</label>
                  <br />
                  <input
                    name="father_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.father_name}
                  />
                  {errors.father_name && touched.father_name && (
                    <small className="text-danger">{errors.father_name}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Birth Date *</label>
                  <br />
                  <input
                    name="father_dob"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="date"
                    className="for-input form-control"
                    value={values.father_dob}
                  />
                  {errors.father_dob && touched.father_dob && (
                    <small className="text-danger">{errors.father_dob}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Age *</label>
                  <br />
                  <input
                    name="father_age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    className="for-input form-control"
                    value={values.father_age}
                  />
                  {errors.father_age && touched.father_age && (
                    <small className="text-danger">{errors.father_age}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Mother Name *</label>
                  <br />
                  <input
                    name="mother_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.mother_name}
                  />
                  {errors.mother_name && touched.mother_name && (
                    <small className="text-danger">{errors.mother_name}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Birth Date *</label>
                  <br />
                  <input
                    name="mother_dob"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="date"
                    className="for-input form-control"
                    value={values.mother_dob}
                  />
                  {errors.mother_dob && touched.mother_dob && (
                    <small className="text-danger">{errors.mother_dob}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Age *</label>
                  <br />
                  <input
                    name="mother_age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    className="for-input form-control"
                    value={values.mother_age}
                  />
                  {errors.mother_age && touched.mother_age && (
                    <small className="text-danger">{errors.mother_age}</small>
                  )}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.school_name}
                  />
                  {errors.school_name && touched.school_name && (
                    <small className="text-danger">{errors.school_name}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Passing Year *</label>
                  <br />
                  <input
                    name="school_year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="date"
                    className="for-input form-control"
                    value={values.school_year}
                  />
                  {errors.school_year && touched.school_year && (
                    <small className="text-danger">{errors.school_year}</small>
                  )}
                </div>
              </div>

              <div>
                <label className="bg-lable">Standard *</label>
                <br />
                <select
                  name="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="for-input form-control"
                  value={values.standard}
                >
                  <option value="12th">12th</option>
                  <option value="10th">10th</option>
                </select>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">College Name *</label>
                  <br />
                  <input
                    name="collage_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.collage_name}
                  />
                  {errors.collage_name && touched.collage_name && (
                    <small className="text-danger">{errors.collage_name}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Passing Year *</label>
                  <br />
                  <input
                    name="collage_year"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="date"
                    className="for-input form-control"
                    value={values.collage_year}
                  />
                  {errors.collage_year && touched.collage_year && (
                    <small className="text-danger">{errors.collage_year}</small>
                  )}
                </div>
              </div>

              <div>
                <label className="bg-lable">Degree *</label>
                <br />
                <select
                  name="degree"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="for-input form-control"
                  value={values.degree}
                >
                  <option value="MCA">MCA</option>
                  <option value="Mcom">Mcom</option>
                  <option value="Phd">Phd</option>
                  <option value="Bcom">Bcom</option>
                </select>
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.account_name}
                  />
                  {errors.account_name && touched.account_name && (
                    <small className="text-danger">{errors.account_name}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Account No. *</label>
                  <br />
                  <input
                    name="accoount_no"  // Keep typo to match type
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.accoount_no}
                  />
                  {errors.accoount_no && touched.accoount_no && (
                    <small className="text-danger">{errors.accoount_no}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Ifsc Code *</label>
                  <br />
                  <input
                    name="ifsc_code"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.ifsc_code}
                  />
                  {errors.ifsc_code && touched.ifsc_code && (
                    <small className="text-danger">{errors.ifsc_code}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Account Type *</label>
                  <br />
                  <input
                    name="account_type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.account_type}
                  />
                  {errors.account_type && touched.account_type && (
                    <small className="text-danger">{errors.account_type}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Bank Name *</label>
                  <br />
                  <input
                    name="bank_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.bank_name}
                  />
                  {errors.bank_name && touched.bank_name && (
                    <small className="text-danger">{errors.bank_name}</small>
                  )}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="for-input form-control"
                    value={values.company_name}
                  />
                  {errors.company_name && touched.company_name && (
                    <small className="text-danger">{errors.company_name}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Address *</label>
                  <br />
                  <textarea
                    name="company_address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="for-input form-control"
                    value={values.company_address}
                  />
                  {errors.company_address && touched.company_address && (
                    <small className="text-danger">{errors.company_address}</small>
                  )}
                </div>
              </div>

              <div className="d-flex gap-5">
                <div>
                  <label className="bg-lable">Joining Date *</label>
                  <br />
                  <input
                    name="jooining_date"   // Keep typo to match type
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="date"
                    className="for-input form-control"
                    value={values.jooining_date}
                  />
                  {errors.jooining_date && touched.jooining_date && (
                    <small className="text-danger">{errors.jooining_date}</small>
                  )}
                </div>
                <div>
                  <label className="bg-lable">Salary *</label>
                  <br />
                  <input
                    name="salary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    className="for-input form-control"
                    value={values.salary}
                  />
                  {errors.salary && touched.salary && (
                    <small className="text-danger">{errors.salary}</small>
                  )}
                </div>
              </div>
            </div>

            {/* Documents Section – Simplified (File inputs need proper handling) */}
            <div>
              <p className="bg-title">Document's upload :</p>
              <div>
                <label>ADHAR CARD : </label>
                <input
                  type="file"
                  name="adhar_card_url"
            
                />
                <br />

                <label>PAN CARD : </label>
                <input
                  type="file"
                  name="pan_card_url"
               
                />
                <br />

                <label>VOTING CARD : </label>
                <input
                  type="file"
                  name="voting_card_url"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex text-center align-items-center gap-4">
              <button
                type="button"
                className="round-button"
                onClick={handleDiscard}
              >
                Discard
              </button>
              <button className="round-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EditPage;