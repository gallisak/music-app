import { Link } from "react-router-dom";
import { useGetChartAlbumsQuery } from "../../app/services/musicApi";

export function PlayListCard() {
  const { data, error, isLoading } = useGetChartAlbumsQuery();

  if (isLoading) {
    return (
      <span className="flex items-center text-[25px]">
        <h1 className="ml-5 font-bold">Loading charts...</h1>
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
      {data &&
        data.data.map((album) => {
          return (
            <Link
              key={album.id}
              to={`/PlayList/${album.id}`}
              className="shrink-0 h-full relative w-55 overflow-hidden rounded-md ml-3 hover:brightness-70"
            >
              <img
                src={album.cover_big}
                className="absolute w-full h-full brightness-25"
                alt=""
              />
              <div className="h-45 flex justify-center">
                <img
                  src={album.cover_big}
                  className="h-47 w-45 mt-5 rounded-xl relative"
                  alt=""
                />
              </div>
              <div className="h-35 z-0 relative flex flex-col justify-center">
                <h1 className="text-white ml-6 mr-6">{album.title}</h1>
              </div>
            </Link>
          );
        })}
    </>
  );
}
