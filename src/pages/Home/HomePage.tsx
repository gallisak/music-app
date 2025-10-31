import { PlayListCard } from "./PlayListCard";

export function HomePage() {
  return (
    <>
      <div className="h-80 ml-0 lg:ml-50">
        <span>
          <h1 className="mb-5 mt-5 ml-3 text-white text-[34px]">Hot Today</h1>
        </span>
        <PlayListCard />
      </div>
    </>
  );
}
