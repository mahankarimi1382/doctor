import React from "react";
import bimeh from "../assets/bimehPic.png";
import bimehAsia from "../assets/bimehAsia.png";
import bimehSaman from "../assets/BimehSaman.png"
import bimehIran from "../assets/bimehIran.png"
import bimehDana from "../assets/bimehDana.png"
import bimehAlborz from "../assets/bimehAlborz.png"
function Bimeh() {
  return (
    <div className=" px-20 gap-5 mt-32 flex items-center justify-end w-full bg-gradient-to-r from-[#3A8EF6] h-[211px] to-[#6F3AFA] ">
      <img className=" absolute right-0  -mt-20" width={297} src={bimeh} />
      <h2 className="  text-[32px] font-semibold text-white">
        بیمه های طرف قرارداد
        <span className=" text-black"> دکتر سریع</span>
      </h2>
      <img width={112} src={bimehAsia} />
      <img width={112} src={bimehSaman} />
      <img width={112} src={bimehIran} />
      <img width={112} src={bimehDana} />
      <img width={112} src={bimehAlborz} />

    </div>
  );
}

export default Bimeh;
