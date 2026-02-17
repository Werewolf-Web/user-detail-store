export interface tableDataType {
  id: string;
  name: string;
  email: string;
  address: string;
  phone_no: number | string;
  is_view?:boolean,

}
const REGISTER_API = import.meta.env.VITE_REGISTER_API;
// console.log(REGISTER_API);

const getAllUseData = await fetch(`${REGISTER_API}/register`);
// console.log(getAllUseData);

export {getAllUseData}