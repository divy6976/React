import React, { useContext } from "react";
import ThemeContext from "../context/theme"; // context object

const Card = () => {
  const { theme } = useContext(ThemeContext); // context se theme le rahe

  const bgClass = theme === "dark" ? "bg-pink-200 text-white" : "bg-white text-black";

  return (
    <div className="flex justify-center p-10">
      <div className={`card w-full shadow-xl lg:w-96 shrink-0 ${bgClass}`}>
        <figure>
          <img
            src="https://img.freepik.com/premium-photo/lionel-messi_1050153-3392.jpg?w=2000"
            alt="Shoes"
            className="rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
