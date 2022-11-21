import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white flex relative">
      <div className="left w-1/2 min-h-[200px] pl-4 flex flex-col justify-center gap-4">
        <h1 className="text-xl font-normal">
          Agar MLM biznesiga qiziqqan bo'lsangiz biz bilan aloqaga chiqing.
        </h1>
        <div className="flex gap-3">
          <a
            href="tel:+998888200494"
            className="flex items-center gap-2 duration-300 border border-black py-2 px-4 rounded-lg bg-white text-black hover:text-white hover:bg-black hover:border-white"
          >
            +998 88 820 04 94
          </a>
          <a
            href="https://t.me/networkerN1"
            className="flex items-center gap-2 duration-300 border border-black py-2 px-4 rounded-lg bg-white text-black hover:text-white hover:bg-black hover:border-white"
            target={"_blank"}
            rel="noreferrer"
          >
            Telegram Orqali <FaTelegramPlane />
          </a>
        </div>
      </div>
      <div className="right w-1/2 min-h-[200px] flex flex-col justify-center gap-3">
        <h2 className="text-2xl font-normal text-center">
          Mening Tashabuslarimini ijtimoiy tarmoqlarda kuzatib boring.
        </h2>
        <div className="social-networks flex gap-3 justify-center items-center w-full">
          <a
            href="https://www.instagram.com/ilyosbek_rahimov/"
            target={"_blank"}
            rel="noreferrer"
            className="text-2xl duration-300 text-white hover:text-orange-400"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100079697085683"
            rel="noreferrer"
            className="text-3xl duration-300 text-white hover:text-cyan-500"
          >
            <CiFacebook />
          </a>
        </div>
      </div>
      <p className="auther absolute top-[85%] left-2/4 -translate-x-1/2 text-center">
        &copy; Mulliflik Huquqi himoyalangan. Sayt Yaratilgan vaqt 2022. Muallif{" "}
        <a
          href="https:/webshohdev-new.netlify.app"
          target={"_blank"}
          className="font-semibold"
          rel="noreferrer"
        >
          WebShohDev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
