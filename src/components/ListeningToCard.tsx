import profilePicture1 from "../assets/images/Profile Picture1.png";
import headphone from "../assets/images/headphone.png";

export function ListeningToCard() {
  return (
    <div className="mb-2 rounded-4xl backdrop-blur-2xl bg-[#5c5c5c]/30 w-42 flex text-[12px]  h-15">
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
  );
}
