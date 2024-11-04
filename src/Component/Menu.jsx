import logo from "../assets/messi.jpg"
function Menu() {
    return(
        <div className="flex h-16 w-full justify-between">
            <div className="flex justify-start items-center gap-2 font-bold text-blue-800">
                <img className="h-16 ring-2 rounded-full" src={logo} alt="logo" /> NewtonGerd
            </div>
            <div className="flex justify-end gap-4 items-center">
            <span className="menu"><a href="#" className="menu_a">Home</a></span><span className="menu"><a href="#" className="menu_a">Service</a></span><span className="menu"><a href="#" className="menu_a">Contact</a></span><span className="menu"><a href="#" className="menu_a">Login</a></span>

            </div>

        </div>
    )
}
export default Menu