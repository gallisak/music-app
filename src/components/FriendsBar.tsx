export function FriendsBar() {
  return (
    <aside className="bg-[#2A2A2A] hidden top-0 z-0 lg:block absolute h-full w-50 right-0">
      <div className="mt-25">
        <h1 className="ml-6 mt-3 text-white text-[18px]">
          Friend’s Listening To
        </h1>
        <div className="flex items-center flex-col mt-6 mb-3">
          <div className="mb-3 rounded-4xl bg-[#5c5c5c] w-42 h-15"></div>
          <div className="mb-3 rounded-4xl bg-[#5c5c5c] w-42 h-15"></div>
          <div className="mb-3 rounded-4xl bg-[#5c5c5c] w-42 h-15"></div>
          <div className="mb-3 rounded-4xl bg-[#5c5c5c] w-42 h-15"></div>
          <div className="mb-3 rounded-4xl bg-[#5c5c5c] w-42 h-15"></div>
        </div>
        <h1 className="ml-8 mt-3 text-white text-[18px]">Suggest to Follow</h1>
      </div>
    </aside>
  );
}
