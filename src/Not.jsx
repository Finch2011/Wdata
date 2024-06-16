import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
function Fund()
 {
    return (
    <>
      <TbError404 className="relative text-[500px] font-bold text-center text-blue-400 "/>
      <p className=" absolute top-52 left-[500px] text-[50px] font-bold text-center text-blue-400">Page is Not Fund</p>
     <Link to={"/"}> <p className=" absolute top-72 left-[500px] text-[20px]  text-center text-blue-800">Go To Home</p></Link>
    </>
    )
}
export default Fund