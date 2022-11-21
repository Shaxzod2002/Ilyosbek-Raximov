import React, { useState, useEffect } from "react";
import axios from "axios";
const aboutUrl = "./jsons/about.json";
export default function About() {
  const [about, setAbout] = useState();
  useEffect(() => {
    const showAbout = async () =>
      setAbout(await (await axios.get(aboutUrl)).data);
    showAbout();
  }, []);
  if (!about) return null;
  return (
    <>
      {about.map((about) => (
        <div className="about w-full min-h-screen flex" id="about" key={about.id}>
          <div className="left w-1/2 flex justify-center items-center p-5">
            <img
              src={about.myImage}
              alt="my_image"
              className="w-[500px] max-w-[90%] outline outline-blue-600 outline-5 outline-offset-4"
            />
          </div>
          <div className="right w-1/2 flex flex-col justify-center items-start gap-5">
            <div className="title flex items-end gap-3">
              <p className="text-lg">{about.title}</p>
              <div className="w-14 h-[2px] bg-[#10776A] mb-2"></div>
            </div>
            <h1 className="text-5xl font-semibold text-[#393939]">
              {about.heading}
            </h1>
            <p className="text-md text-[#3A3A3A]">{about.paragraph1}</p>
            <p className="text-md text-[#3A3A3A]">{about.paragraph2}</p>
            <a
              href="tel:+998888200494"
              className="bg-[#067164] border border-white duration-500 text-white flex py-3 px-5 rounded-sm hover:text-[#067164] hover:bg-white hover:border-[#067164]"
            >
              {about.btn}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
