import React, { useEffect, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import axios from "axios";
import "./main.css";

function Gallery() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);
  const [gallery, setGallery] = useState();
  useEffect(() => {
    const showGallery = async () =>
      setGallery(await (await axios.get("./jsons/gallery.json")).data);
    showGallery();
  }, []);
  if (!gallery) return null;
  return (
    <div className="w-full min-h-[200px] flex flex-col justify-center items-center gap-5 py-3 bg-gradient-to-br from-cyan-400 to-blue-600">
      <h1 className="text-center text-3xl font-bold text-white">
        Mening Suratlarimni ko'rish uchun pasda joylashgan surat ustiga bosing.
      </h1>
      <FaLongArrowAltDown className="icon" />
      <div
        onClick={() => setToggler(!toggler)}
        className="cursor-pointer bg-gradient-to-br from-white to-yellow-300 p-2 w-[300px] rounded-xl"
      >
        <img
          src={require("./9.jpg")}
          className="w-full  rounded-xl"
          alt="error"
        />
      </div>
      <FsLightbox toggler={toggler} sources={gallery.map((item) => item.img)} />
    </div>
  );
}

export default Gallery;
