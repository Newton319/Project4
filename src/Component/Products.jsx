import sunrise from "../assets/sunrise.jpg";
import starry from "../assets/starry.jpeg";
import lilboy from "../assets/lilboy.webp";
import fifth from "../assets/fifth.png";
import six from "../assets/six.png";
import seven from "../assets/seven.jpg";
import eight from "../assets/eight.jpg";

function Products() {
  return (
    <div>
      <div className="flex gap-3 py-5">
        <button className="ring-2 rounded-md px-2">For phone</button>
        <button className="ring-2 rounded-md px-2">For laptop</button>
        <button className="ring-2 rounded-md px-2">4k</button>
        <button className="ring-2 rounded-md px-2">Download</button>
        <button className="ring-2 rounded-md px-2">8k</button>
        <button className="ring-2 rounded-md px-2">HD</button>
      </div>
      <div className="flex gap-3 py-4">
        <div className="flex-1 border  ">
          {" "}
          <img
            className="flex justify-end items-end rounded-md"
            src={sunrise}
            alt="sunrise"
          />{" "}
          <p>
            {" "}
            <button>
              <b>900+Anime wallpaper</b>{" "}
            </button>
          </p>
        </div>
        <div className="flex-1 border ">
          {" "}
          <img
            className="flex justify-evenly items-center rounded-md"
            src={starry}
            alt="starry"
          />
          <button>
            <b> Anime 1168 Wallpaper ...</b>{" "}
          </button>
        </div>
        <div className="flex-1 border ">
          {" "}
          <img
            className="flex justify-evenly items-center rounded-md"
            src={lilboy}
            alt="lilboy"
          />{" "}
          <button>
            <b>Desktop Wallpaper Anime...</b>{" "}
          </button>
        </div>
      </div>
      <div className="flex gap-3 py-4">
        <div className="flex-1 border ">
          {" "}
          <img
            className="flex justify-evenly items-center rounded-md"
            src={fifth}
            alt="fifth"
          />{" "}
          <button>
            <b>Anime Live wallpaper-Chrome.</b>{" "}
          </button>
        </div>
        <div className="flex-1 border ">
          {" "}
          <img
            className="flex justify-evenly items-center rounded-md"
            src={six}
            alt="six"
          />{" "}
          <button>
            <b>Satoru Gogo Dark Anime..</b>{" "}
          </button>
        </div>
        <div className="flex-1 border ">
          {" "}
          <img
            className="flex justify-evenly items-center rounded-md"
            src={seven}
            alt="seven"
          />{" "}
          <button>
            {" "}
            <b>Anime Boy wallpaper Download..</b>{" "}
          </button>
        </div>
      </div>
      <div className="flex-1 border ">
        {" "}
        <img
          className="flex justify-evenly items-center rounded-md"
          src={eight}
          alt="eight"
        />{" "}
        <button>
          <b>ANIME 180P wallpapers..</b>{" "}
        </button>
      </div>
    </div>
  );
}
export default Products;
