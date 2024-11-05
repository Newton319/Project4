import logo from"../assets/logo.jpg"
function Hero() {
    return(
        <div className="flex items-center"> 
            <div className="border flex flex-1 h-60 flex-col text-center items-center p-4">
  <p className="font-bold  text-xl flex-1 w-auto">CJ is a place where places are placed in different places and of all the places we only have one place....</p>
 <button className="w-20 bg-orange-400 rounded-md">Click</button>
</div>
            <div className="border flex flex-1 justify-center items-center h-60">
                <img className="w-60 justify-around items-center" src={logo} alt="logo" />
            </div>

        </div>
    )
}
export default Hero