import { data } from "autoprefixer";
import { useEffect, useRef, useState } from "react"

function Master({}) {
    const [Dataweather , setDataweather] = useState();
    const i = useRef()
    console.log(i)
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?Tehran&appid=6c65d2c064fe3cdc12b62c5b8787b0a9&q=takab&units=metric`)
            .then(res=>res.json())
            .then(json=>setDataweather(json))
    })
    if(!Dataweather){
        return null
    }
    
    return (
        <div className="flex items-center flex-col gap-y-5  justify-center mt-10 ">
            <div className="flex justify-center items-center">
            <input ref={i} className="p-1 outline-none rounded-sm" type="search" placeholder="searching city ..." />
            <button className="border-[1.5px] border-blue-600 rounded-md p-2 text-white hover:bg-blue-600 ">Search</button>
            </div>
         <div className=" w-max h-max flex-col rounded-2xl flex items-center justify-center bg-blue-500 p-20">
            <div className="flex flex-col justify-center  gap-y-5">
                <div className="flex flex-col justify-center items-center gap-y-3">
                <h1 className="text-4xl text-white">{Dataweather.name}</h1>
                <p className="text-yellow-100 font-bold text-xl ml-1.5">{Dataweather.sys.country}</p>
                </div>
                <div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3">
                <img className="w-[100px]" src="./public/sun.png" alt="" />
                <h2 className="ml-4 text-xl text-white">Temperature : { Math.round(Dataweather.main.temp)} <span className="text-[19px]">°C</span></h2>
                <h2 className="ml-4 text-lg text-white">Wind speed : { Math.round(Dataweather.wind.speed)} <span className="text-[19px]">Km/h</span></h2>
                <h2 className="ml-4 text-lg text-white">wind direction : { Math.round(Dataweather.wind.deg)} <span className="text-[19px]">°E</span></h2>
            </div>
            
            
         </div>
        </div>

    )
}
export default Master