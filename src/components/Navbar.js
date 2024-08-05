import React from "react";
import logo from "../assets/logo.png"
function Navbar() {
  return (
    <div className=" vazir w-full px-20 h-36 flex justify-between items-center">
      <div className=" flex items-center justify-center gap-8 ">
        <img src={logo}/>
        <div className=" flex flex-col justify-center items-center">
          <button className=" text-indigo-600">خانه</button>
          <hr className=" w-4 rounded-2xl text-2xl h-1 bg-indigo-600" />
        </div>

        <button className=" hover:text-indigo-600 transition-all">
          نوبت دهی
        </button>
        <button className=" hover:text-indigo-600 transition-all">
          مشاوره تلفنی
        </button>
        <button className=" hover:text-indigo-600 transition-all">
          تخصص ها
        </button>
        <button className=" hover:text-indigo-600 transition-all">
          مراکز درمانی
        </button>
        <button className=" hover:text-indigo-600 transition-all">
          مجله درمانی
        </button>
      </div>
      <button className=" p-2 px-4 text-white rounded bg-gradient-to-r from-sky-500 to-indigo-600">
        ثبت نام / ورود
      </button>
    </div>
  );
}

export default Navbar;
