import profilePicture6 from "../assets/images/Profile picture6.png";
import userPlus from "../assets/images/fe_user-plus.png";

export function SuggestToFollowCard() {
  return (
    <div className="w-40 mb-4">
      <div className="flex">
        <img src={profilePicture6} alt="user profile photo" />
        <div>
          <p className="ml-3 text-[12px] text-white">Alfredo George</p>
          <button className="flex justify-center items-center text-[12px] w-30 text-white bg-[#2A2A2A] border-green-500 border-2 ml-2 mt-1 rounded-2xl p-1 hover:brightness-70">
            <img className="mr-1" src={userPlus} alt="user plus icon" />
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
