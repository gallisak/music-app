import cover from "../../assets/images/Cover.png";

export function PersonalPlayListCard() {
  return (
    <div className="mr-50">
      <div className="h-30 border-b-2 flex w-full dark:bg-[#232323] bg-[#787878] overflow-hidden hover:brightness-70">
        <div className="h-full ml-5 flex justify-start items-center">
          <img
            src={cover}
            className="h-26 w-26 relative"
            alt="playlist photo"
          />
        </div>
        <div className=" relative z-0 flex flex-col justify-center">
          <h1 className="dark:text-white text-black text-[25px] mb-5 ml-6">
            My music
          </h1>
          <p className="dark:text-white text-black ml-6 mr-6 text-[12px]">
            User Playlist • Andrew Halchyshak
          </p>
        </div>
      </div>
    </div>
  );
}
