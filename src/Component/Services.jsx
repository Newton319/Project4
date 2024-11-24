import grind from "../assets/Grind.jpg";
import anime from "../assets/anime.jpg";

function Services() {
  return (
    <div className="flex gap-4 ">
      <div className="flex-1 border ">
        <img src={grind} alt="Grind" /> what do i have to say here then
      </div>

      <div className="flex-1 border ">
        <img src={anime} alt="anime" /> what do i have to say here then{" "}
      </div>
    </div>
  );
}
export default Services;
