import { useState } from "react";
import picture from "../assets/picture.png";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import eight from "../assets/eight.jpg";
function Content() {
  const [isLogin, setisLogin] = useState(false);

  return (
    <div className="flex bg-cyan-700">
      <div className="flex-1 h-72">
        <img
          className="h-60 flex-1 rounded-md items-center w-auto justify-center"
          src={picture}
          alt="picture"
        />
      </div>
      <div>
        <img
          className="h-60 flex-1 px-10 py-5 rounded-md w-auto"
          src={eight}
          alt="eight"
        />
      </div>
    </div>
  );
}
export default Content;
