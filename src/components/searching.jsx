import { useEffect, useState , useRef } from "react"
import { Link } from "react-router-dom";
import Master from "./master";
function Searching() {
    return (
        <>
         <div>
            <input className="w-[20%] h-10 rounded-lg outline-none pl-2 pr-2" ref={InputTag} type="search" /> <button className="border-blue-600 border-[1.5px] p-2 rounded-lg text-white" onClick={show}>add</button>
         </div>
        </>
    )
} export default Searching