import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { type tableDataType } from "../core/_module";
import "../../../../../public/assets/styles/main.css";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const REGISTER_API = import.meta.env.VITE_REGISTER_API;

const DashbordPage = () => {
  const [tableData, setTableData] = useState<tableDataType[]>([]);
  const [searchh, setSearchh] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${REGISTER_API}/register`);
        const data: tableDataType[] = await res.json();

        setTableData(data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  const exportData = tableData.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    address: item.address,
    phone_no: item.phone_no,
  }));

  const handleSerch = () => {
    console.log("search :", searchh)
  }
  const handleEdit = async (id: string) => {
    console.log("Clicked ID :", id);
    navigate(`/add-detail/${id}`)

  };
  const handleDelete = async (id: string) => {
    console.log("deleted ID :", id);

    try {
      const response = await fetch(`${REGISTER_API}/register/${id}`
        , { method: "DELETE", })
      console.log(response);
      Swal.fire({
        title: "Done!",
        text: "Deleted Successfully",
        icon: "success",
        confirmButtonText: "OK"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });

    }
    catch (error) {
      console.log(error)
    }
  };
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "user_data.xlsx");
  };
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center no-print mb-2">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="search-table"
              value={searchh}
              onChange={(e) => setSearchh(e.target.value)}

            />

            <button className="round-button" onClick={handleSerch} >
              <SearchIcon />
            </button>
          </div>
          <div className="d-flex gap-2">
            <button className="round-button" onClick={handleExport}>
              Export
            </button>
            <button className="round-button" onClick={handlePrint}>
              Print
            </button>
          </div>
        </div>

        <div className="table-responsive print-container">
          <table className="table  table-hover ">
            <thead className="table table-active">
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone number</th>
                <th className="no-print">Action</th>
                <th className="no-print">View Detail</th>
              </tr>
            </thead>

            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center">
                    No Records Found
                  </td>
                </tr>
              ) : (
                tableData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.phone_no}</td>

                    {/* Edit + Delete Column */}
                    <td className="text-center no-print">

                      <button
                        className="btn btn-sm btn-info mt-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>


                      <button
                        className="btn btn-sm btn-danger mt-2 ms-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>

                    {/* View Column */}
                    <td className="text-center no-print">
                      {item.is_view ? (
                        <button className="btn btn-sm btn-info mt-2">
                          View
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-secondary mt-2"
                          disabled
                        >
                          View
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashbordPage;
