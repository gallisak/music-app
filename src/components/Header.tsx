import photo1 from "../assets/images/Ellipse 1.png";
import iconpark from "../assets/images/icon-park-outline_down.png";
import left from "../assets/images/fe_arrow-left.png";
import right from "../assets/images/fe_arrow-right.png";

export function Header() {
  return (
    <header className="h-20 top-0 w-full fixed z-10 bg-[#18181A] text-white">
      <div className=" ml-1 lg:ml-50  mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center flex-1 min-w-0">
          <div className="hidden     lg:flex items-center">
            <div className="rounded-full h-12 w-12 bg-[#2A2A2A] border-2 flex justify-center items-center">
              <img src={left} className="w-5 h-5" alt="left button" />
            </div>
            <div className="rounded-full h-12 w-12 bg-[#2A2A2A] border-2 ml-3 flex justify-center items-center">
              <img className="w-5 h-5" src={right} alt="right button" />
            </div>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="ml-3 rounded-4xl bg-[#2A2A2A] p-3 pl-6 w-full lg:w-175 text-[#6B6B6B]"
          />
        </div>

        <div className="flex items-center ml-3">
          <div className="hidden lg:flex items-center justify-center rounded-3xl h-12 w-42 bg-[#2A2A2A] border-2 border-green-500">
            UPGRADE
          </div>
          <div className="rounded-3xl h-12 bg-[#2A2A2A] ml-3 flex items-center justify-start p-1.5 lg:w-56">
            <img src={photo1} className="w-9 h-9 ml-1" alt="profile photo" />

            <p className="hidden lg:block ml-2">Andrew Halchyshak</p>
            <img className="ml-2" src={iconpark} alt="menu button" />
          </div>
        </div>
      </div>
    </header>
  );
}
