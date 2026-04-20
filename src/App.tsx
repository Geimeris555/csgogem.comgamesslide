import { Sidebar } from "@/sections/Sidebar";
import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";

export const App = () => {
  return (
    <body className="text-white text-base not-italic tabular-nums font-normal accent-auto bg-slate-950 bg-no-repeat box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-clip pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-rubik">
      <div className="bg-no-repeat box-border caret-transparent outline-[3px]">
        <div className="bg-slate-950 box-border caret-transparent flex outline-[3px]">
          <div className="relative bg-no-repeat box-border caret-transparent flex flex-col grow max-w-full min-h-[1000px] min-w-[auto] outline-[3px]">
            <Sidebar />
            <Header />
            <Main />
            <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
            <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
          </div>
        </div>
      </div>
      <div className="bg-no-repeat box-border caret-transparent outline-[3px]"></div>
      <div className="absolute bg-no-repeat box-border caret-transparent contents outline-[3px] pointer-events-none left-0 top-0">
        <div
          role="tooltip"
          className="absolute bg-no-repeat box-border caret-transparent flex outline-[3px] z-[2000] inset-0"
        >
          <div className="absolute text-xs font-medium bg-slate-800 box-border caret-transparent hidden tracking-[0.4px] leading-[19.2px] outline-[3px] break-words px-3 py-[5px] rounded-md">
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              :sad:
            </span>
          </div>
        </div>
      </div>
      <div className="fixed bg-no-repeat box-border caret-transparent h-0 outline-[3px] w-0 z-[2147483001] font-system_ui"></div>
    </body>
  );
};
