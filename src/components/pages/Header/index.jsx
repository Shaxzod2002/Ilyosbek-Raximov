/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
export default function Header() {
  return (
    <header className="w-full flex" id="experience">
      <div className="w-1/2 py-5 min-h-[120vh] left flex justify-center items-start gap-5 flex-col pl-[50px]">
        <h4 className="uppercase font-semibold text-lg text-[#eaeaea]">
          Tajribali biznes jamoasi hodimi.
        </h4>
        <h1 className="text-[40px] text-[#eaeaea] font-bold">
          Evro logistikaga ega Xalqaro kompaniyada Ish boshqaruvchi menendjer
          vazifasida ish yurituvchi.{" "}
        </h1>
        <p className="text-[#eaeaea]">
          Bu Kompaniya asosan mayishiy texnikalarni online ravishda sotish bilan
          shug'ullanadi.
        </p>
        <h3 className="text-xl text-[#eaeaea]">
          Bizga Yosh, qobilyatga ega saloxiyatli kadrlar kerak. Agarda online
          ishlashga qiziqsangiz telefon raqamingizni qoldiring. Bizning rasmiy
          ofeslarimiz Evropada, MDX davlatlarida Va O'zbekiston ning 12
          viloyatida va Nukus shaxridaxam mavjud siz jonli tarzdaxam suxbatdan
          o'tishingiz mumkun.
        </h3>
        <h3 className="font-bold text-[#eaeaea]">Murojat uchun:</h3>
        <div className="btn-group flex gap-5 flex-wrap justify-center">
          <a
            href="tel:+998888200494"
            className="flex items-center gap-2 transition-all border border-white py-2 px-4 rounded-lg bg-white text-blue-500 hover:text-white hover:bg-blue-500"
          >
            Aloqaga Chiqish <BsFillTelephoneInboundFill />
          </a>
          <a
            href="https://t.me/networkerN1"
            className="flex items-center gap-2 transition-all border border-white py-2 px-4 rounded-lg bg-white text-blue-500 hover:text-white hover:bg-blue-500"
            target={"_blank"}
            rel="noreferrer"
          >
            Telegram Orqali <FaTelegramPlane />
          </a>
        </div>
        <h3 className="font-bold text-[#eaeaea]">Murojatingizni kutamiz:</h3>
      </div>
      <div className="w-1/2 min-h-[120vh] right">
        <div className="w-full min-h-[120vh] header__right-container flex justify-end items-start pr-16 pt-[300px]">
          <div className="company-service w-32 rounded-2xl overflow-hidden">
            <img
              src={require("./image/logo.png")}
              className="w-full"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
