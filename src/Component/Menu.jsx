import { useState } from "react";
import logo from "../assets/messi.jpg";
import { Link } from "react-router-dom";
function Menu() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-16 bg-cyan-700 w-full relative justify-between">
      <div className="flex justify-start flex-1 items-center gap-2 font-bold text-blue-800">
        <img className="h-16 ring-2 rounded-full" src={logo} alt="logo" />{" "}
        NewtonGerd
      </div>
      <div className="md:hidden">
        <span
          className="icon-ellipsis-vert hover:bg-slate-200"
          onClick={() => setOpen(!open)}
        ></span>
      </div>
      {open ? (
        <div className=" justify-end flex flex-col md:flex-row flex-1 bg-cyan-700 w-8% right-0 top-5 md:w-96 gap-4 p-4 rounded-md absolute items-end md:items-center">
          <span className="menu">
            <Link to="/" className="menu_a">
              Home
            </Link>
          </span>
          <span className="menu">
            <Link to="/services" className="menu_a">
              Service
            </Link>
          </span>
          <span className="menu">
            <Link to="/products" className="menu_a">
              Products
            </Link>
          </span>
          <span className="menu">
            <Link to="/login" className="menu_a">
              Login
            </Link>
          </span>
          <span className="menu">
            <Link to="/register" className="menu_a">
              Register
            </Link>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Menu;
