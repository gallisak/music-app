import cover from "../../../assets/images/Cover.png";

export function LikedSongsCard() {
  return (
    <div>
      <div className="h-15 border-b-2 flex w-full bg-[#232323] overflow-hidden hover:brightness-70">
        <div className="h-full ml-5 flex justify-start items-center">
          <img src={cover} className="h-10 w-10 relative" alt="" />
        </div>
        <div className=" relative z-0 flex flex-col justify-center">
          <h1 className="text-white text-[18px]  ml-6">CLUB NISSAN</h1>
          <p className="text-gray-400 ml-6 mr-6 text-[12px]">
            Noxygen • CLUB NISSAN
          </p>
        </div>
      </div>
    </div>
  );
}
