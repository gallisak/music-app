import { Link } from "react-router-dom";
import { useGetChartArtistsQuery } from "../../app/services/musicApi";

export function ArtistCard() {
  const { data, error, isLoading } = useGetChartArtistsQuery();

  if (isLoading) {
    return (
      <span className="flex items-center text-[25px]">
        <h1 className="w-20 h-20 ml-20 rounded-full border-t-4 border-t-black border-l-4 border-l-gray-500 border-r-4 border-r-gray-500 border-b-4 border-b-gray-500 animate-spin"></h1>
      </span>
    );
  }

  if (error) {
    return (
      <span>
        <h1 className="ml-5 font-bold">Upload error</h1>
      </span>
    );
  }

  return (
    <>
      {data?.data.map((artist) => {
        return (
          <Link
            key={artist.id}
            to={`/Artist/${artist.id}`}
            className="shrink-0 flex h-full relative w-113 overflow-hidden rounded-2xl ml-3 hover:brightness-70"
          >
            <img
              src={artist.picture_big}
              className="absolute rounded-md w-full h-41 brightness-25"
              alt=""
            />
            <div className="h-45 ml-2 flex w-full ">
              <img
                src={artist.picture_big}
                className="h-37 w-45 rounded-xl mt-2 relative"
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex">
                  <p className="relative h-5 text-[#B6B6B6] font-bold ml-3 mt-10 text-[12px]">
                    A R T I S T
                  </p>
                </div>
                <h1 className="relative text-white mt-1 ml-3 text-[19px]">
                  {artist.name}
                </h1>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
