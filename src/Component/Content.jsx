import { useState } from "react";
import sticker from "../assets/sticker.jpg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
function Content() {
  const [isLogin, setisLogin] = useState(false);

  return (
    <div className="flex bg-cyan-700">
      <div className="flex-1 h-72 justify-around flex items-center">
        <img
          className="h-60 items-center w-auto justify-center"
          src={sticker}
          alt="sticker"
        />
      </div>
    </div>
  );
}
export default Content;
