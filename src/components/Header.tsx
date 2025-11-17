import photo1 from "../assets/images/Ellipse 1.png";
import iconpark from "../assets/images/icon-park-outline_down.png";
import left from "../assets/images/fe_arrow-left.png";
import right from "../assets/images/fe_arrow-right.png";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-20 top-0 w-full fixed z-10 bg-[#18181A] text-white">
      <div className=" ml-1 lg:ml-50  mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center flex-1 min-w-0">
          <div className="hidden     lg:flex items-center">
            <div className="rounded-full h-12 w-12 bg-[#2A2A2A] border-2 flex justify-center items-center hover:brightness-70">
              <img src={left} className="w-5 h-5" alt="left button" />
            </div>
            <div className="rounded-full h-12 w-12 bg-[#2A2A2A] border-2 ml-3 flex justify-center items-center hover:brightness-70">
              <img className="w-5 h-5" src={right} alt="right button" />
            </div>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="ml-3 rounded-4xl bg-[#2A2A2A] p-3 pl-6 w-full lg:w-175 focus:outline-none border-[#18181A] border-2 focus:border-green-500 text-white"
          />
        </div>

        <div className="flex items-center ml-3">
          <div className="hidden lg:flex items-center justify-center rounded-3xl h-12 w-42 bg-[#2A2A2A] border-2 border-green-500 hover:brightness-70">
            UPGRADE
          </div>
          <div
            onClick={handleProfile}
            className="rounded-3xl cursor-pointer h-12 bg-[#2A2A2A] ml-3 flex items-center justify-start p-1.5 lg:w-56 hover:brightness-70"
          >
            <img src={photo1} className="w-9 h-9 ml-1" alt="profile photo" />

            <p className="hidden lg:block ml-2 mr-1.5">Andrew Halchyshak</p>
            <img
              className={`
                transition-transform duration-300 ease-in-out
                ${isOpen ? "rotate-180" : "rotate-0"}
              `}
              src={iconpark}
              alt="menu button"
            />
          </div>
          <div
            className={`
                  lg:w-42 w-30 bg-[#7d7d7d] ml-4 mt-29 rounded-2xl
                  overflow-hidden            
                  transition-all duration-300 ease-in-out origin-top
                  ${isOpen ? " max-w-42 " : " max-w-0"} 
                `}
          >
            <div className="h-40 flex flex-col justify-center text-[18px]">
              <span className="w-full h-1/3 flex flex-col justify-center items-center hover:bg-[#363636]">
                <a href="/">Profile</a>
              </span>
              <span className="w-full h-1/3 flex flex-col justify-center items-center hover:bg-[#363636]">
                <a href="/">Settings</a>
              </span>
              <span className="w-full h-1/3 flex flex-col justify-center items-center hover:bg-[#363636]">
                <button>Log Out</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
