import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import banner from "../assets/Banner.png";
import fastdr1 from "../assets/fastdr1.png";
import fastdr2 from "../assets/fastdr2.png";
import fastdr3 from "../assets/fastdr3.png";
import { FiArrowLeftCircle } from "react-icons/fi";
import abbas from "../assets/abbas.png";
import star from "../assets/star.png";
import pinkCardPic from "../assets/pinkCardPic.png";
import blueCardPic from "../assets/blueCardPic.png";
function Landing() {
  const doctors = [
    {
      id: 1,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
    {
      id: 2,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
    {
      id: 3,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
    {
      id: 4,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
    {
      id: 5,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
    {
      id: 6,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
    {
      id: 7,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
    {
      id: 8,
      name: "عباس",
      family: "میر احمدی",
      ability: "قلب و عروق",
      razi: 558,
      raziPercent: 87,
      rate: 4.7,
      address: "بیمارستان میلاد",
      tags: [
        { id: 1, text: "جراحی قلب" },
        { id: 2, text: "آنجوگرافی" },
        { id: 3, text: "تست ورزش" },
      ],
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center">
      {/* <img src={banner} /> */}
      <div className="flex banner justify-center items-center w-full h-[422px] bg-gradient-to-b">
        <div className="  w-1/2 flex flex-col gap-3 ">
          <div className=" text-4xl tracking-wide text-white">
            <h1 className=" flex">
              تلاش ما دسترسی
              <h1 className=" text-black">سریعتر و آسان</h1>
            </h1>
            <h1> تر شما به خدمات پزشکی است :)</h1>
          </div>
          <p className=" text-end text-xl text-slate-200 tracking-wide">
            کافیست خدمات درمانی موردنظر خود را جستجو کنید
            <br />
            (دریافت نوبت مشاوره پزشکی ،خدمات پزشکی در منزل)
          </p>
        </div>
      </div>
      <label className=" shadow-indigo-200 px-3 flex items-center justify-between bg-white h-20 shadow-2xl  rounded-2xl -mt-8 w-3/5">
        <RiSearch2Line className=" text-3xl text-gray-400" />
        <input
          placeholder="جستجو پزشک، درمانگر، کلینیک..."
          className="  outline-none h-full w-[80%]  "
        />
        <button className=" flex  items-center  px-4 text-indigo-600 border-indigo-600">
          <IoLocationOutline className=" text-2xl" />
          انتخاب شهر
        </button>
      </label>
      <h1 className=" mt-8 text-3xl">خدمات دکتر سریع</h1>
      <div className=" mt-8 h-80 flex  justify-evenly items-center w-full">
        <TfiArrowCircleRight className=" hover:bg-indigo-600 hover:rounded-full hover:text-white transition-all text-4xl text-indigo-600" />
        <div className=" transition-all flex flex-col justify-between p-4 items-center bg-white shadow-2xl w-80 rounded-2xl border border-sky-300 h-80 hover:border-2 hover:-mt-5 hover:shadow-indigo-600 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover: hover:border-indigo-500">
          <img src={fastdr1} />
          <button className=" w-64 bg-gradient-to-r from-sky-600 p-3 px-10 text-white rounded-full to-indigo-600">
            خدمات پزشکی در منزل
          </button>
        </div>
        <div className=" transition-all flex flex-col justify-between p-4 items-center bg-white shadow-2xl w-80 rounded-2xl border border-sky-300 h-80 hover:border-2 hover:-mt-5 hover:shadow-indigo-600 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:border-indigo-500">
          <img src={fastdr2} />
          <button className=" w-64 bg-gradient-to-r from-sky-600 p-3 px-10 text-white rounded-full to-indigo-600">
            تماس با پزشک
          </button>
        </div>
        <div className=" transition-all flex flex-col justify-between p-4 items-center bg-white  w-80 rounded-2xl border border-sky-300 h-80 hover:border-2 hover:-mt-5 shadow-2xl hover:shadow-indigo-600 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:border-indigo-500">
          <img src={fastdr3} />
          <button className=" w-64 bg-gradient-to-r from-sky-600 p-3 px-10 text-white rounded-full to-indigo-600">
            دریافت نوبت
          </button>
        </div>
        <TfiArrowCircleLeft className=" hover:bg-indigo-600 hover:rounded-full hover:text-white transition-all text-4xl text-indigo-600" />
      </div>
      <div className=" items-center justify-between mt-16 px-20 w-full flex">
        <h2 className=" text-3xl">پزشکان ویزیت فوری</h2>
        <hr className=" w-4/6 border-gray-300 border-[1px] " />
        <label className=" justify-center items-center gap-2 flex">
          <button className=" text-[#4282F7]">مشاهده همه</button>
          <FiArrowLeftCircle className=" text-[#4282F7] text-xl" />
        </label>
      </div>
      <div className=" mt-16 flex gap-5 no-scrollbar overflow-x-auto w-11/12">
        {doctors.map((items) => {
          return (
            <div
              key={items.id}
              className=" flex gap-5 flex-col justify-center items-center rounded-xl border-2 min-w-72 h-[414px]"
            >
              <img src={abbas} />
              <div className=" flex w-full px-5 justify-between items-center">
                <h2 className=" text-[16px] font-semibold">
                  {items.name} {items.family}
                </h2>
                <div className=" flex items-center justify-center">
                  <h2 className=" font-medium text-[12px]">{items.rate}</h2>
                  <img className=" w-[18px] h-[18px]" src={star} />
                </div>
              </div>
              <h2 className=" text-gray-400 text-[14px] font-semibold px-5 w-full">
                متخصص {items.ability}
              </h2>
              <h2 className=" text-[#1F7168] text-[14px] font-semibold w-full px-5">
                ({items.raziPercent}%) {items.razi} بیمار راضی
              </h2>
              <div className=" flex w-full justify-between px-5 gap-2">
                {items.tags.map((item2) => {
                  return (
                    <h2
                      className=" text-[12px] font-bold text-[#757575] bg-gray-300 p-1 rounded-xl flex"
                      key={item2.id}
                    >
                      {item2.text}
                    </h2>
                  );
                })}
              </div>
              <hr className=" w-[90%] border-[1px] border-gray-400" />
              <div className=" w-full px-5 flex items-center ">
                <IoLocationOutline className=" text-xl text-[#4380F7]" />
                <h2 className="  text-[12px] font-bold text-[#C0C0C0]">
                  {" "}
                  نشانی:{items.address}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-between items-center w-4/5 mt-20 ">
        <div className=" flex items-center justify-between px-5 bg-[#A8035C] rounded-2xl h-[266px] w-[48%]">
          <div className="flex items-end gap-10 flex-col">
            <div className=" flex flex-col gap-2">
              <h2 className=" font-semibold text-[22px] text-white">
                خدمات پزشکی رو برای شما در دسترستر کردیم
              </h2>
              <h5 className=" font-semibold text-[14px] text-[#F9F9F9]">
                فقط با چند کلیک به خدمات پزشکی قلب و عروق دسترسی پیدا میکنید.
              </h5>
            </div>
            <button className=" w-[148px] flex justify-between bg-white rounded-xl p-2 text-[#3B3B3B] font-semibold text-[14px]">
              مشاهده خدمات
              <FiArrowLeftCircle className=" text-2xl" />
            </button>
          </div>
          <img width={218} src={pinkCardPic} />
        </div>
        <div className=" flex gap-2 items-center justify-between px-5 bg-[#11749E] h-[266px] rounded-2xl w-[48%]">
          <div className="flex items-end gap-10 flex-col">
            <div className=" flex flex-col gap-2">
              <h2 className=" font-semibold text-[22px] text-white">
                یعنی اونقدر سرت شلوغه که وقت نمی کنی بری دکتر؟{" "}
              </h2>
              <h5 className=" font-semibold text-[14px] text-[#F9F9F9]">
                خب اینکه ناراحتی نداره میتونی از ویزیت آنلاین استفاده کنی{" "}
              </h5>
            </div>
            <button className=" flex items-center justify-between w-[112px] bg-white rounded-xl p-2 text-[#3B3B3B] font-semibold text-[14px]">
              نوبت بگیر
              <FiArrowLeftCircle className=" text-2xl" />
            </button>
          </div>
          <img width={218} src={blueCardPic} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
