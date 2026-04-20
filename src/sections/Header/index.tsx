import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { HeaderNav } from "@/sections/Header/components/HeaderNav";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Header = () => {
  return (
    <header className="fixed items-start bg-slate-950 shadow-[rgba(0,0,0,0.2)_0px_0px_0px_0px,rgba(0,0,0,0.14)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_0px_0px_0px] box-border caret-transparent flex flex-col shrink-0 justify-between max-w-full outline-[3px] w-full z-[1008] border border-gray-900 border-solid left-0 top-0">
      <div className="relative items-center bg-no-repeat box-border caret-transparent flex shrink-0 h-16 min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden">
        <div className="bg-no-repeat box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto p-4">
          <div className="items-center bg-no-repeat box-border caret-transparent flex grow outline-[3px] -m-1">
            <HeaderLogo />
            <HeaderNav />
            <div className="bg-no-repeat box-border caret-transparent hidden grow min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"></div>
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
};
