import { data } from "autoprefixer";
import { useState } from "react"

function Master({}) {
    const [Dataweather , setDataweather] = useState();
    const handlesearch = () =>
    fetch(`https://api.openweathermap.org/data/2.5/weather?Tehran&appid=d7bbe6d6df861ce08c8853f34f7829b2&q=tehran&units=metric`)
            .then(res=>res.json())
            .then(json=>setDataweather(json))
            let fixer = "c"
            const handlesearch2 = () =>
            fetch('https://api.openweathermap.org/data/2.5/weather?Tehran&appid=d7bbe6d6df861ce08c8853f34f7829b2&q=tehran&units=imperial')
                    .then(res=>res.json())
                    .then(json=>setDataweather(json))
                   
    return (
        <div className="flex items-center justify-center mt-5">
         <div className=" w-[400px] h-64 rounded-2xl flex items-start justify-between bg-blue-500 p-10">
            <div className="flex flex-col justify-center mt-4 gap-y-5">
                <div>
                <h1 className="text-4xl text-white">{Dataweather && Dataweather.name}</h1>
                <p className="text-gray-400 text-xl ml-1.5">IR</p>
                </div>
                <div className="flex gap-x-5 ">
                <button className="border border-[1.5px] border-white rounded-md p-1.5 text-white text-sm hover:text-white hover:bg-blue-700 transition-colors hover:border-none"onClick={handlesearch2} >Fahrenheit</button>
                <button className="border border-[1.5px] border-white rounded-md p-1.5 text-white text-sm hover:text-white hover:bg-blue-700 hover:border-none " onClick={handlesearch}>Celsius</button>
                </div>
                <div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <img src="./public/sun.png" alt="" />
                <h2 className="ml-4 text-3xl text-white">{Dataweather && Math.round(Dataweather.main.temp)}</h2>
            </div>
            
         </div>
        </div>

    )
}
export default Master