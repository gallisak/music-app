interface SongCardProps {
  photo: string | undefined;
  title: string;
  description: string;
  className?: string;
}

export function SongCard({
  photo,
  title,
  description,
  className,
}: SongCardProps) {
  return (
    <>
      <div className=" lg:mr-100">
        <div
          className={`h-15 border-b-2 flex w-full ${className} ml-0 lg:ml-50   bg-[#232323] overflow-hidden hover:brightness-70`}
        >
          <div className="h-full ml-5 flex justify-start items-center">
            <img
              src={photo}
              className="h-10 shrink-0 w-10 relative rounded-md"
              alt=""
            />
          </div>
          <div className=" relative z-0 flex flex-col min-w-0 justify-center">
            <h1 className="text-white text-[18px] truncate ml-6">{title}</h1>
            <p className="text-gray-400 ml-6 mr-6 truncate text-[12px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
