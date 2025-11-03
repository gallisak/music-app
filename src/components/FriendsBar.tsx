import profilePicture1 from "../assets/images/Profile Picture1.png";
import profilePicture2 from "../assets/images/Profile Picture2.png";
import profilePicture3 from "../assets/images/Profile Picture3.png";
import profilePicture4 from "../assets/images/Profile Picture4.png";
import profilePicture5 from "../assets/images/Profile Picture5.png";
import profilePicture6 from "../assets/images/Profile picture6.png";
import profilePicture7 from "../assets/images/Profile picture7.png";
import profilePicture8 from "../assets/images/Profile picture8.png";
import userPlus from "../assets/images/fe_user-plus.png";
import headphone from "../assets/images/headphone.png";

export function FriendsBar() {
  return (
    <aside className="bg-[#2A2A2A] fixed hidden top-0 z-1 lg:block h-full w-50 right-0">
      <div className="mt-25">
        <h1 className="ml-6 mt-3 text-white text-[18px]">
          Friend’s Listening To
        </h1>
        <div className="flex items-center flex-col mt-6 mb-3">
          <div className="mb-2 rounded-4xl bg-[#5c5c5c] w-42 flex text-[12px]  h-15">
            <img src={profilePicture1} className="my-2.5 ml-2" alt="" />
            <div>
              <p className="text-white ml-1 mt-2 font-bold">Miracle Bergson</p>
              <div className="flex ml-1 mt-1 w-25">
                <img src={headphone} alt="" />
                <p className="text-white text-[10px] ml-0.5 truncate">
                  Adele - Easy On Me
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2 rounded-4xl bg-[#5c5c5c] w-42 flex text-[12px]  h-15">
            <img src={profilePicture2} className="my-2.5 ml-2" alt="" />
            <div>
              <p className="text-white ml-1 mt-2 font-bold">Gretchen Press</p>
              <div className="flex ml-1 mt-1 w-25">
                <img src={headphone} alt="" />
                <p className="text-white text-[10px] ml-0.5 truncate">
                  Rainych - Say so
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2 rounded-4xl bg-[#5c5c5c] w-42 flex text-[12px]  h-15">
            <img src={profilePicture3} className="my-2.5 ml-2" alt="" />
            <div>
              <p className="text-white ml-1 mt-2 font-bold">Ann Baptista</p>
              <div className="flex ml-1 mt-1 w-25">
                <img src={headphone} alt="" />
                <p className="text-white text-[10px] ml-0.5 truncate">
                  Khutko - Taribo
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2 rounded-4xl bg-[#5c5c5c] w-42 flex text-[12px]  h-15">
            <img src={profilePicture4} className="my-2.5 ml-2" alt="" />
            <div>
              <p className="text-white ml-1 mt-2 font-bold">Anika Geidt</p>
              <div className="flex ml-1 mt-1 w-25">
                <img src={headphone} alt="" />
                <p className="text-white text-[10px] ml-0.5 truncate">
                  Mr Mantega - Coffe
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2 rounded-4xl bg-[#5c5c5c] w-42 flex text-[12px]  h-15">
            <img src={profilePicture5} className="my-2.5 ml-2" alt="" />
            <div>
              <p className="text-white ml-1 mt-2 font-bold">Kianna George</p>
              <div className="flex ml-1 mt-1 w-25">
                <img src={headphone} alt="" />
                <p className="text-white text-[10px] ml-0.5 truncate">
                  Olix - when i see
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="  text-white mb-5 text-[18px]">Suggest to Follow</h1>

          <div className="w-40 mb-4">
            <div className="flex">
              <img src={profilePicture6} alt="" />
              <div>
                <p className="ml-3 text-[12px] text-white">Alfredo George</p>
                <button className="flex justify-center items-center text-[12px] w-30 text-white bg-[#2A2A2A] border-green-500 border-2 ml-2 mt-1 rounded-2xl p-1">
                  <img className="mr-1" src={userPlus} alt="" />
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="w-40 mb-4">
            <div className="flex">
              <img src={profilePicture7} alt="" />
              <div>
                <p className="ml-3 text-[12px] text-white">Tiana Franci</p>
                <button className="flex justify-center items-center text-[12px] w-30 text-white bg-[#2A2A2A] border-green-500 border-2 ml-2 mt-1 rounded-2xl p-1">
                  <img className="mr-1" src={userPlus} alt="" />
                  Follow
                </button>
              </div>
            </div>
          </div>

          <div className="w-40 mb-4">
            <div className="flex">
              <img src={profilePicture8} alt="" />
              <div>
                <p className="ml-3 text-[12px] text-white">Madelyn Levin</p>
                <button className="flex justify-center items-center text-[12px] w-30 text-white bg-[#2A2A2A] border-green-500 border-2 ml-2 mt-1 rounded-2xl p-1">
                  <img className="mr-1" src={userPlus} alt="" />
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
