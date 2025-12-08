import { ControlMobileBar } from "../../components/Bar/ControlMobileBar";
import { HistoryBar } from "../../components/Bar/HistoryBar";
import { Header } from "../../components/Header/Header";

export function Page404() {
  return (
    <>
      <Header />
      <HistoryBar />

      <div className="lg:mt-20 lg:mr-50 lg:ml-50">
        <div className="h-150 w-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-[100px] lg:text-[140px]">404</h1>
          <h1 className="font-bold text-[50px] text-nowrap lg:text-[140px]">
            E R R O R
          </h1>
          <h1 className="font-bold text-[30px] text-nowrap lg:text-[80px]">
            PAGE NOT FOUND
          </h1>
        </div>
      </div>

      <ControlMobileBar />
    </>
  );
}
