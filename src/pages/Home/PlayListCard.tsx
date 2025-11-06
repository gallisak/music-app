import cover from "../../assets/images/Cover.png";

export function PlayListCard() {
  return (
    <>
      <div className=" shrink-0 h-full relative w-55 overflow-hidden rounded-md ml-3 hover:brightness-70">
        <img
          src={cover}
          className="absolute w-full h-full brightness-25"
          alt=""
        />
        <div className="h-45 flex justify-center">
          <img src={cover} className="h-47 w-45 mt-5 relative" alt="" />
        </div>
        <div className="h-35 z-0 relative flex flex-col justify-center">
          <h1 className="text-white ml-6">Woman of Indonesia</h1>
          <p className="text-gray-400 ml-6 mr-6 text-[12px]">
            Indonesian female artists who enrich the diversity of music...
          </p>
        </div>
      </div>
    </>
  );
}
