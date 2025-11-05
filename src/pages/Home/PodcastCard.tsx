import cover1 from "../../assets/images/Cover1.png";

export function PodcastCard() {
  return (
    <>
      <div className=" flex-shrink-0 flex h-full relative w-113 overflow-hidden rounded-2xl ml-3">
        <img
          src={cover1}
          className="absolute rounded-2xl w-full h-41 brightness-25"
          alt=""
        />
        <div className="h-45 ml-2 flex w-full ">
          <img
            src={cover1}
            className="h-37 w-45 rounded-xl mt-2 relative"
            alt=""
          />
          <div className="flex flex-col">
            <div className="flex">
              <p className="relative h-5 text-[#B6B6B6] ml-3 mt-10 text-[12px]">
                PODCAST •
              </p>
              <p className="relative text-white h-5 ml-1 mt-10 text-[12px]">
                PANDJI PRAGIWAKSONO
              </p>
            </div>
            <h1 className="relative text-white mt-1 ml-3 text-[19px]">
              Long live Virtual Indonesia
            </h1>
            <p className="relative text-[#B6B6B6] text-[12px] ml-3 w-50 mt-2">
              Indonesian female artists who enrich the diversity of music...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
