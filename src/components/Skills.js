import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import heart from "../assets/heart.png";
import brain from "../assets/brain.png";
import kollie from "../assets/kollie.png";
import eye from "../assets/eye.png";
import zayman from "../assets/zayman.png";
import dakheli from "../assets/dakheli.png";
import dentist from "../assets/dentist.png";
function Skills() {
  return (
    <div className=" w-full items-center mt-10 justify-center flex">
      <div className=" rounded-lg flex flex-col justify-evenly  shadow-2xl w-5/6 h-80 bg-[#FEFEFE]">
        <div className=" w-full items-center justify-between px-4 flex">
          <h2 className=" text-[32px] font-semibold">دنبال چه تخصصی هستید</h2>
          <button className="flex text-[#4282F7] gap-2 items-center justify-center text-[16px] font-semibold">
            مشاهده همه تخصص ها
            <FiArrowLeftCircle className=" text-[#4282F7] text-xl" />
          </button>
        </div>
        <div className=" flex justify-evenly">
          <div className=" hover:bg-sky-200 hover:shadow-xl hover:-mt-2 transition-all hover:shadow-indigo-300 w-[155px] h-[155px] flex flex-col justify-center items-center rounded-xl bg-[rgba(61,136,246,0.1)]">
            <img width={120} src={heart} />
            <h2 className=" text-[16px] font-semibold">قلب و عروق</h2>
          </div>
          <div className="  hover:bg-sky-200 hover:shadow-xl hover:-mt-2 transition-all hover:shadow-indigo-300 w-[155px] h-[155px] flex flex-col justify-center items-center rounded-xl bg-[rgba(61,136,246,0.1)]">
            <img width={120} src={brain} />
            <h2 className=" text-[16px] font-semibold">قلب و عروق</h2>
          </div>
          <div className="  hover:bg-sky-200 hover:shadow-xl hover:-mt-2 transition-all hover:shadow-indigo-300 w-[155px] h-[155px] flex flex-col justify-center items-center rounded-xl bg-[rgba(61,136,246,0.1)]">
            <img width={120} src={kollie} />
            <h2 className=" text-[16px] font-semibold">قلب و عروق</h2>
          </div>
          <div className="  hover:bg-sky-200 hover:shadow-xl hover:-mt-2 transition-all hover:shadow-indigo-300 w-[155px] h-[155px] flex flex-col justify-center items-center rounded-xl bg-[rgba(61,136,246,0.1)]">
            <img width={120} src={eye} />
            <h2 className=" text-[16px] font-semibold">قلب و عروق</h2>
          </div>
          <div className="  hover:bg-sky-200 hover:shadow-xl hover:-mt-2 transition-all hover:shadow-indigo-300 w-[155px] h-[155px] flex flex-col justify-center items-center rounded-xl bg-[rgba(61,136,246,0.1)]">
            <img width={120} src={zayman} />
            <h2 className=" text-[16px] font-semibold">قلب و عروق</h2>
          </div>
          <div className="  hover:bg-sky-200 hover:shadow-xl hover:-mt-2 transition-all hover:shadow-indigo-300 w-[155px] h-[155px] flex flex-col justify-center items-center rounded-xl bg-[rgba(61,136,246,0.1)]">
            <img width={120} src={dakheli} />
            <h2 className=" text-[16px] font-semibold">قلب و عروق</h2>
          </div>
          <div className="  hover:bg-sky-200 hover:shadow-xl hover:-mt-2 transition-all hover:shadow-indigo-300 w-[155px] h-[155px] flex flex-col justify-center items-center rounded-xl bg-[rgba(61,136,246,0.1)]">
            <img width={120} src={dentist} />
            <h2 className=" text-[16px] font-semibold">قلب و عروق</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
