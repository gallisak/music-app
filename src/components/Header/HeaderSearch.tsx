import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeaderSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim().length > 0) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        type="text"
        placeholder="Search"
        className="rounded-4xl dark:bg-[#2A2A2A] bg-[#cbcbcb] font-bold text-black dark:text-white min-w-22 sm:min-w-30 p-3 pl-4 flex-1 mr-3 focus:outline-none border-[#18181A] border-2 focus:border-green-500"
      />
    </>
  );
}
