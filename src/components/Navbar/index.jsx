import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import { HiOutlineBars3CenterLeft, HiXMark } from "react-icons/hi2";
import imageMenejer from "./images/1.jpg";
import imageMenejer2 from "./images/2.jpg";
export default function Navbar() {
  const [navbar, setNavbar] = useState();
  const [toggler, setToggler] = useState(false);
  const [toggler1, setToggler1] = useState(false);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("navbar__menu-active");
  };
  const showNavbarRemove = () => {
    navRef.current.classList.remove("navbar__menu-active");
  };
  useEffect(() => {
    const setNavbarUrl = async () =>
      setNavbar(await (await axios.get("./jsons/navbar.json")).data);
    setNavbarUrl();
  }, []);
  if (!navbar) return null;
  return (
    <>
      <div className="nav-top w-full flex">
        <div className="left w-1/2 min-h-[40px] flex justify-center items-center px-3 gap-3">
          <h3 className="text-blue-500 font-semibold">Menejer of</h3>
          <p onClick={() => setToggler(!toggler)} className="cursor-pointer">
            Sotvoldiyeva Lobarxon
          </p>
          <FsLightbox toggler={toggler} sources={[imageMenejer]} />
        </div>
        <div className="right w-1/2 min-h-[40px] flex justify-center items-center px-3 gap-3">
          <h3 className="text-blue-500 font-semibold">Menejer of</h3>
          <p onClick={() => setToggler1(!toggler1)} className="cursor-pointer">
            Sodikov Joʻrabek
          </p>
          <FsLightbox toggler={toggler1} sources={[imageMenejer2]} />
        </div>
      </div>
      <nav className="w-full flex">
        <div className="brand w-[20%] min-h-[80px] flex justify-center items-center">
          <img src={navbar[0]} alt="logo" className="w-28" />
        </div>
        <div
          className="menu w-[80%] min-h-[80px] flex justify-evenly items-center"
          ref={navRef}
        >
          <div className="mark" onClick={showNavbar}>
            <HiXMark />
          </div>
          {navbar[1].map((nav) => (
            <a
              href={nav.href}
              key={nav.id}
              onClick={showNavbarRemove}
              className="duration-300 hover:text-blue-600 relative content-none before:absolute before:duration-300 before:left-0 before:top-full before:w-0 before:h-0.5 before:bg-blue-600 before:hover:w-full"
            >
              {nav.link}
            </a>
          ))}
        </div>
        <div className="bars min-h-[80px]" onClick={showNavbar}>
          <HiOutlineBars3CenterLeft />
        </div>
      </nav>
    </>
  );
}
