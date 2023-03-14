import Favicon from "../assets/favicon-32x32.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { name: "HOME", url: "/home" },
  { name: "DESTINATION", url: "/destination" },
  { name: "CREW", url: "/crew" },
  { name: "TECHNOLOGY", url: "/technology" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState("/home");
  const [hover, setHover] = useState("/home");

  return (
    <div className="absolute top-10 left-0 w-full">
      <div className="w-full h-100">
        <div className="flex flex-row justify-between items-center px-20">
          <img
            src={Favicon}
            alt="icon"
            className="object-contain w-[48px] h-[48px]"
          />

          <div className="flex items-center">
            <div className="bg-white w-[830px] h-[96px] absolute top-[10] right-0 stroke-[#979797] opacity-10 backdrop-blur-[80px]" />
            <div className="flex gap-[48px]">
              {navItems.map(({ name, url }, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActive(url);
                    navigate(url);
                  }}
                  className="z-20"
                  onMouseEnter={() => setHover(url)}
                  onMouseLeave={() => setHover("")}
                >
                  <div className="flex gap-[12px]">
                    <p className="text-white font-bold">0{index}</p>
                    <h1 className=" text-white">{name}</h1>
                  </div>
                  <div
                    className={`${
                      active == url
                        ? "opacity-100"
                        : hover == url
                        ? "opacity-50"
                        : "opacity-0"
                    }  w-auto bg-white h-[3px] z-10`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
