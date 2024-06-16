import { useEffect, useState , useRef } from "react"
import { IoAddSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";


function Master({}) {
    const [Dataweather , setDataweather] = useState();
    // useEffect(()=>{
       
    // });
    const InputTag = useRef()
    const show = () => {
         
        fetch(`https://api.openweathermap.org/data/2.5/weather?Tehran&appid=d7bbe6d6df861ce08c8853f34f7829b2&q=${InputTag.current.value}&units=metric`)
                .then(res=>res.json())
                .then(json=>setDataweather(json))
                
    }
    const search = () =>{
        
    }
        
                
    return (
        <div className="container mx-auto mt-3">
            <div className="flex items-center gap-x-[450px]">
                <div className="w-[250px]">
            <input className="w-[60%] h-10 rounded-lg outline-blue-800 pl-2 pr-2 outline-2" ref={InputTag} type="search" /> <button className="border-blue-600 border-[1.5px] p-2 rounded-lg text-white" onClick={show}>add</button>
                </div>
            <h1 className="text-white text-[30px]">{Dataweather && Dataweather.name} <span className="text-[20px] text-blue-500">{Dataweather && Dataweather.sys.country}</span></h1>
            <IoIosSettings className="text-[32px] text-white"/>
            </div>
             <div className="mt-56">
                <h1 className="ml-40 relative text-[140px] text-center text-white">{Dataweather && Math.round( Dataweather.main.temp)}  <span className="absolute top-5 font-bold text-4xl left-[662px]">°C</span></h1>
                <div className="flex justify-center ml-40 ms-center gap-x-2">
                    <h1 className="text-[20px] text-center text-white">Wind Speed : </h1>
                    <div className="bg-blue-400 rounded-lg w-max px-1 py-0.5 h-max text-[20px] text-center text-white">{Dataweather && Math.round( Dataweather.wind.speed)} <span className="text-[12px]">Km/h</span></div>
                </div>
                
             </div>
        </div>


    )
}
export default Master