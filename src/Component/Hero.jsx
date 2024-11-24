import fifth from "../assets/fifth.png";
function Hero() {
  return (
    <div className="flex bg-cyan-700 flex-col md:flex-row items-center">
      <div className=" flex flex-1 h-60 flex-col text-center items-center p-4">
        <p className="font-bold  text-xl flex-1 w-auto">
          Welcome to NewtonGerd collections, here we have all kinds of Anime
          Wallpapers For Phone, Laptops and even Large Screens... Feel free to
          pick your fav and Download..
        </p>
        <button className="w-20 bg-orange-400 rounded-md">Click</button>
      </div>
      <div className=" flex flex-1 justify-center items-center h-60">
        <img
          className="w-full h-60 justify-around items-center"
          src={fifth}
          alt="fifth"
        />
      </div>
    </div>
  );
}
export default Hero;
