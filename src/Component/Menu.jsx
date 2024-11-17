import { useState } from "react";
import logo from "../assets/messi.jpg";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="flex h-16 bg-cyan-700 w-full justify-between">
      <div className="flex justify-start flex-1 items-center gap-2 font-bold text-blue-800">
        <img className="h-16 ring-2 rounded-full" src={logo} alt="logo" />{" "}
        NewtonGerd
      </div>
      <div
        className={` justify-end flex flex-1 w-full gap-4 p-4 rounded-md items-center`}
      >
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
    </div>
  );
}
export default Menu;
