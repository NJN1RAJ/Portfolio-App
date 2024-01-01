import React from "react";

function Card({ skillimg, skillname }) {
  return (
    <div className=" bg-white w-64 h-32 p-2 mx-3 rounded-xl my-1">
      <div
        style={{
          width: "84px",
          height: "84px",
          margin: "0 auto",
          backgroundSize: "cover",
          backgroundImage: `url(${skillimg})`,
        }}
      ></div>
      <p className="text-black text-center mt-1 text-lg font-semibold">
        {skillname}
      </p>
    </div>
  );
}

export default Card;
