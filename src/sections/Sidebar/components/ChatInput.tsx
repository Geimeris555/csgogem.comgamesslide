export const ChatInput = () => {
  return (
    <div className="bg-no-repeat box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] pt-3 pb-4 px-4">
      <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]"></div>
      <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]"></div>
      <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]"></div>
      <div className="relative font-medium items-center bg-slate-950 shadow-[rgba(0,0,0,0.2)_0px_2px_1px_-1px,rgba(0,0,0,0.14)_0px_1px_1px_0px,rgba(0,0,0,0.12)_0px_1px_3px_0px] box-border caret-transparent flex outline-[3px] break-words z-0 border border-gray-900 overflow-hidden px-8 py-3 rounded-lg border-solid">
        <div className="absolute bg-no-repeat box-border caret-transparent outline-[3px] break-words w-full z-[1] top-0 inset-x-0">
          <div
            role="progressbar"
            className="relative box-border caret-transparent h-0 outline-[3px] break-words w-full overflow-hidden top-0"
          >
            <div className="absolute bg-white box-border caret-transparent opacity-[0.12] outline-[3px] break-words w-full left-0 inset-y-0"></div>
            <div className="absolute bg-white box-border caret-transparent opacity-[0.12] outline-[3px] break-words w-[0%] left-0 inset-y-0"></div>
            <div className="bg-white box-border caret-transparent outline-[3px] break-words">
              <div className="absolute bg-white box-border caret-transparent outline-[3px] break-words left-0 inset-y-0"></div>
              <div className="absolute bg-white box-border caret-transparent outline-[3px] break-words left-0 inset-y-0"></div>
            </div>
          </div>
        </div>
        <span className="text-gray-500 text-xs bg-no-repeat box-border caret-transparent block tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center uppercase">
          You need to be at least{" "}
          <span className="text-white bg-no-repeat box-border caret-transparent outline-[3px] break-words">
            level 10
          </span>
          to chat
        </span>
        <span className="absolute bg-no-repeat box-border caret-transparent block outline-[3px] break-words"></span>
      </div>
    </div>
  );
};
