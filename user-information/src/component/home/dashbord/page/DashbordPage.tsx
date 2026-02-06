import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { type tableDataType } from "../core/_module";
import "../../../../../public/assets/styles/main.css";

const REGISTER_API = import.meta.env.VITE_REGISTER_API;

const DashbordPage = () => {
  const [tableData, setTableData] = useState<tableDataType[]>([]);

  // 🔥 API call using useEffect
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

  const handleEdit = (id: string) => {
    console.log("Clicked ID 👉", id);
  };
  const handleDelete = (id: string) => {
    console.log("deleted ID 👉", id);
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
  const view= false ;

  return (
    <div className="container my-5">
<div className="mb-3 d-flex justify-content-end gap-2">
  <button className="round-button" onClick={handleExport}>
    Export
  </button>

  <button className="round-button" onClick={handlePrint}>
    Print
  </button>
</div>

<div className="table-responsive">
      <table className="table  table-hover ">
        <thead className="table table-active">
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Action</th>
             <th>View Detail</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.phone_no}</td>
<td className="">
  <button
    className="btn btn-sm btn-primary me-2 mt-2"
    onClick={() => handleEdit(item.id)}
  >
    Edit
  </button>

  <button
    className="btn btn-sm btn-danger mt-2"
    onClick={() => handleDelete(item.id)}
  >
    Delete
  </button>
</td>
{view ?(<td className="text-center">
  <button className="btn btn-sm btn-info mt-2">View</button>
</td>):(
  <td className="text-center">
  <button className="btn btn-sm btn-secondary mt-2" disabled>View</button>
</td>
) }


            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DashbordPage;
