import { useState } from "react"
import logo from "../assets/messi.jpg"
function Menu() {
    const [open, setOpen] =useState(false)
    const handleClick=(e)=> {
        setOpen(!open)
        console.log(open)
    }
    return(
        <div className="flex h-16 w-full justify-between">
            <div className="flex justify-start items-center gap-2 font-bold text-blue-800">
                <img className="h-16 ring-2 rounded-full" src={logo} alt="logo" /> NewtonGerd
            </div>
            <div className={` ustify-end gap-4 ${open? "flex":"hidden"} absolute w-full flex-col gap-4 p-4 bg-blue-300 rounded-md items-start`}>
            <span className="menu"><a href="#"  onClick={handleClick} className="menu_a">Home</a></span><span className="menu"><a href="#" className="menu_a">Service</a></span><span className="menu"><a href="#" className="menu_a">Contact</a></span><span className="menu"><a href="#" className="menu_a">Login</a></span>

            </div>
            <div onClick={handleClick} className="icon-server flex lg:hidden w-10  h-10 bg-blue-500 text-white hover:ring-2 ring-blue-700 rounded-full justify-center items-center cursor-pointer"></div>

        </div>
    )
}
export default Menu