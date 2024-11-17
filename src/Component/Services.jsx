import grind from "../assets/Grind.jpg";
import human from "../assets/human.jpg";

function Services() {
  return (
    <div className="flex gap-4 h-80">
      <div className="flex-1 border ">
        <img src={grind} alt="Grind" /> what do i have to say here then
      </div>

      <div className="flex-1 border ">
        <img src={human} alt="human" /> what do i have to say here then{" "}
      </div>

      <div className="flex-1 border  ">
        <img src={picture} alt="picture" /> what do i have to say here then ?
      </div>
    </div>
  );
}
export default Services;
