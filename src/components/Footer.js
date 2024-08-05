import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import calling from "../assets/calling.png";
import sms from "../assets/sms.png";
import building from "../assets/building-4.png";
import certicicate1 from "../assets/cetificate.png";
import certicicate2 from "../assets/cetificate2.png";
import certicicate3 from "../assets/cetificate3.png";
import certicicate4 from "../assets/cetificate4.png";
import { SiLinkedin } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className=" w-full h-[595px] gap-10 flex justify-center items-center flex-col border-t-4 ">
      <div className=" w-full h-1/2">
        <div className=" text-[22px]  flex px-32 p-10 text-[#414141]">
          <h2 className=" w-44 ">دکتر سریع</h2>
          <h2 className=" w-44 ">خدمات</h2>
          <h2 className=" w-44 ">نیکو کاری</h2>
          <h2 className=" w-44 ">پشتیبانی</h2>
        </div>
        <div className=" text-[16px] font-medium px-32 w-full flex">
          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>سوالات متداول</h2>
            <h2>تماس با ما</h2>
            <h2>درباره ما</h2>
          </div>
          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>خدمات پزشکی در منزل</h2>
            <h2>مشاوره غیر حضوری</h2>
            <h2>مراکز درمانی</h2>
            <h2>نوبت دهی </h2>
          </div>

          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>درمانگر داوطلب</h2>
            <h2>بیشتر بدانید</h2>
            <h2>کمک مالی</h2>
          </div>
          <div className=" w-44 gap-5  text-[#757575] flex flex-col">
            <h2>شبکه های اجتماعی</h2>
            <h2>واحد انفورماتیک</h2>
            <h2>حریم شخصی</h2>
            <h2>تماس با ما</h2>
          </div>
          <div className=" mr-10 gap-3 flex flex-col">
            <h2 className=" text-[#414141] text-[18px] font-semibold">
              خبرنامه
            </h2>
            <p className=" text-[#757575] text-[14px]">
              برای اینکه از جدیدترین اخبار دکتر سریع جا نمونید...
            </p>
            <div className=" flex gap-5 ">
              <input
                placeholder="ایمیل خودرا اینجا واردکنید"
                className=" px-4 w-[336px] h-[48px] border rounded-xl border-[#919191]"
              />
              <button className=" text-white text-[16px] gap-2 flex justify-center items-center bg-[#457EF7] rounded-lg w-[100px]">
                ارسال
                <FiArrowLeftCircle />
              </button>
            </div>
            <p className=" text-[14px] text-[#919191]">
              تلاش ما ارائه بهترین خدمات ممکن به شما همراهان دکتر سریع است.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full h-1/2 flex justify-between px-32">
        <div className=" text-[#414141] flex flex-col gap-8 items-start  w-1/2">
          <span className="flex justify-center gap-3 items-center">
            <img width={24} src={calling} />
            <h2>تماس با پشتیبانی: 021-1111111 | 021-2222222</h2>
          </span>
          <span className="flex justify-center gap-3 items-center">
            <img width={24} src={sms} />
            <h2> نشانی پست الکترونیک:example@gmail.com</h2>
          </span>
          <span className="flex justify-center gap-3 items-center">
            <img width={24} src={building} />
            <h2>نشانی: تهران</h2>
          </span>
        </div>
        <div className=" flex flex-col gap-5 w-1/3">
          <div className=" flex">
            <img width={80} src={certicicate1} />
            <img width={80} src={certicicate2} />
            <img width={80} src={certicicate3} />
            <img width={80} src={certicicate4} />
          </div>
          <p className=" text-[#757575]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
          </p>
        </div>
      </div>
      <hr className=" w-[85%] border-[#919191] border-[1px]" />
      <div className=" flex w-[85%] justify-between">
        <h2 className=" text-[#919191] text-[16px]">
          تمامی حقوق این سایت متعلق به شرکت دکتر سریع است
        </h2>
        <div className=" flex gap-5">
          <SiLinkedin className=" text-[#5F5F5F] text-2xl" />
          <PiInstagramLogoFill className=" text-[#5F5F5F] text-2xl" />
          <FaTelegramPlane className=" text-[#5F5F5F] text-2xl" />
          <IoLogoYoutube className=" text-[#5F5F5F] text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
