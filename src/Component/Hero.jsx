import human from "../assets/human.jpg";
function Hero() {
  return (
    <div className="flex bg-cyan-700 items-center">
      <div className=" flex flex-1 h-60 flex-col text-center items-center p-4">
        <p className="font-bold  text-xl flex-1 w-auto">
          CJ is a place where places are placed in different places and of all
          the places we only have one place....
        </p>
        <button className="w-20 bg-orange-400 rounded-md">Click</button>
      </div>
      <div className=" flex flex-1 justify-center items-center h-60">
        <img
          className="w-full h-60 justify-around items-center"
          src={human}
          alt="human"
        />
      </div>
    </div>
  );
}
export default Hero;
