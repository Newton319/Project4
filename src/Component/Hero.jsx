import logo from"../assets/money.jpg"
function Hero() {
    return(
        <div className="flex justify-between items-center">
            <div className="border flex flex-col h-60 items-center justify-center">
  <p className="font-bold text-xl text-center flex-1 w-32">CJ is a place....</p>
 <button className="w-14 bg-orange-400 rounded-md">Click</button>
</div>
            <div className="border flex justify-center h-60">
                <img className="w-60 justify-around items-center" src={logo} alt="logo" />
            </div>

        </div>
    )
}
export default Hero